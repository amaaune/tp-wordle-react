import { useState } from "react";
import "./App.css";
import { Grid } from "./Grid";
import "./keyboard.css";
import { Keyboard } from "./Keyboard";
import { Modal } from "./Rules";

function App() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [currentTry, setCurrentTry] = useState("");

  function handleKeyPress(key: string) {
    if (key === "<-") {
      setCurrentGuess((prev) => prev.slice(0, -1)); 
      return;
    }
    if (key === "ENTER") {
      setCurrentTry(() => {})
      return; 
    }
    if (currentGuess.length < 5) {
      setCurrentGuess((prev) => prev + key);
    }
  }

  return (
    <>
      <Grid currentGuess={currentGuess} />
      <Keyboard onKeyPress={handleKeyPress} />
    </>
  );
}

export default App;