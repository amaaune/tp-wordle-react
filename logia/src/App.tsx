import { useState } from "react";
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

  function handleKeyPress(key: string) {
    if (gameWin === true || history.length > 5) {
      return;
    }
    if (key === "<-") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }
    if (key === "ENTER") {
      const valid = Validate(currentGuess, "CHIEN");
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
