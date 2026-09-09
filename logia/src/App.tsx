import { useState } from "react";
import "./App.css";
import { Grid } from "./Grid";
import "./keyboard.css";
import { Keyboard } from "./Keyboard";
import { Modal, RulesButton } from "./Rules";
import { Validate } from "./Validate";

export interface Try {
  guess: string;
  result: string[];
}

const SECRET = "CHIEN";
const MAX_ATTEMPTS = 6;

function App() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [result, setResult] = useState<string[]>([]);
  const [history, setHistory] = useState<Try[]>([]);
  const [showFail, setShowFail] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  function handleKeyPress(key: string) {
    if (gameOver) return;

    if (key === "<-") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (key === "ENTER") {
      if (currentGuess.length < 5) return;

      const valid = Validate(currentGuess, SECRET);
      const newHistory = [...history, { guess: currentGuess, result: valid }];

      setResult(valid);
      setHistory(newHistory);
      setCurrentGuess("");

      const won = valid.every((r) => r === "green");
      const lost = !won && newHistory.length >= MAX_ATTEMPTS;

      if (won) setGameOver(true);
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
      <Keyboard onKeyPress={handleKeyPress} />

      <Modal isOpen={showFail} onClose={() => setShowFail(false)}>
        <h2>Perdu !</h2>
        <p>Le mot à trouver était : <strong>{SECRET}</strong></p>
      </Modal>
    </>
  );
}

export default App;