import { useEffect, useState } from "react";
import "./App.css";
import { Grid } from "./Grid";
import "./keyboard.css";
import { Keyboard } from "./Keyboard";
import { Modal } from "./Rules";
import { Validate } from "./Validate";

export interface Try {
  guess: string;
  result: string[];
}

function App() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [result, setResult] = useState<string[]>([]);
  const [history, setHistory] = useState<Try[]>([]);
  const [gameWin, setGameWin] = useState<boolean>(false);
  const [todayWord, setTodayWord] = useState<string>("");

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
        console.log(resultat);
        setTodayWord(resultat.word);
      } catch (erreur) {
        console.error(erreur.message);
      }
    }
    fetchAnswer();
  }, []);

  function handleKeyPress(key: string) {
    if (gameWin === true || history.length > 5) {
      return;
    }
    if (key === "<-") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }
    if (key === "ENTER") {
      const valid = Validate(currentGuess, todayWord);
      setHistory([...history, { guess: currentGuess, result: valid }]);
      setGameWin(valid.every((string) => string === "green"));
      setCurrentGuess("");
      setResult([]);
      return;
    }
    if (currentGuess.length < 5) {
      setCurrentGuess((prev) => prev + key);
    }
  }

  return (
    <>
      <Grid currentGuess={currentGuess} result={result} history={history} />
      <Keyboard onKeyPress={handleKeyPress} />
    </>
  );
}

export default App;
