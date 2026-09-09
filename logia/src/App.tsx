import { useEffect, useState } from "react";
import "./App.css";
import { Grid } from "./Grid";
import "./keyboard.css";
import { Keyboard } from "./Keyboard";
import { Modal, RulesButton } from "./Rules";
import { Validate } from "./Validate";
import { Results } from "./Results";

export interface Try {
  guess: string;
  result: string[];
}

const MAX_ATTEMPTS = 6;
const Priority: Record<string, number> = { grey: 0, orange: 1, green: 2 };

function App() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [result, setResult] = useState<string[]>([]);
  const [history, setHistory] = useState<Try[]>([]);
  const [gameWin, setGameWin] = useState<boolean>(false);
  const [todayWord, setTodayWord] = useState<string>("");
  const [showFail, setShowFail] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    async function fetchAnswer() {
      const url = "http://localhost:3000/api/word?lang=fr";
      try {
        const reponse = await fetch(url, {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        });
        if (!reponse.ok) {
          throw new Error(`Statut de réponse : ${reponse.status}`);
        }
        const resultat = await reponse.json();
        setTodayWord(resultat.word);
      } catch (erreur) {
        if (erreur instanceof Error) {
          console.error(erreur.message);
        } else {
          console.error("Une erreur inconue est survenue", erreur);
        }
      }
    }
    fetchAnswer();
  }, []);

  const lettreColor: Record<string, string> = {};

  history.forEach((etry) => {
    for (let i = 0; i < 5; i++) {
      const lettre = etry.guess[i].toUpperCase();
      const color = etry.result[i];
      if (
        !lettreColor[lettre] ||
        Priority[color] > Priority[lettreColor[lettre]]
      ) {
        lettreColor[lettre] = color;
      }
    }
  });

  function handleKeyPress(key: string) {
    if (gameOver) return;

    if (key === "<-") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (key === "ENTER") {
      if (currentGuess.length < 5) return;
      const valid = Validate(currentGuess, todayWord);
      const newHistory = [...history, { guess: currentGuess, result: valid }];

      setHistory(newHistory);
      setCurrentGuess("");
      setResult([]);

      const won = valid.every((string) => string === "green");
      const lost = !won && newHistory.length >= MAX_ATTEMPTS;

      if (won) {
        setGameOver(true);
        setGameWin(true);
      }
      if (lost) {
        setGameOver(true);
        setShowFail(true);
      }
      return;
    }

    if (currentGuess.length < 5) {
      setCurrentGuess((prev) => prev + key);
    }
  }

  return (
    <>
      <RulesButton />

      <Grid currentGuess={currentGuess} result={result} history={history} />
      <Keyboard onKeyPress={handleKeyPress} lettreColor={lettreColor} />

      <Modal isOpen={showFail} onClose={() => setShowFail(false)}>
        <Results word={todayWord} success={false} />
      </Modal>
      <Modal isOpen={gameWin} onClose={() => setGameWin(false)}>
        <Results word={todayWord} success={true} />
      </Modal>
    </>
  );
}

export default App;
