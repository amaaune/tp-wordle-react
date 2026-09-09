import { useState } from "react";
import "./App.css";
import { Grid } from "./Grid";
import "./grid.css";
import "./keyboard.css";
import { Keyboard } from "./Keyboard";

function App() {
  return (
    <>
      <Grid />
      <Keyboard />
    </>
  );
}

export default App;
