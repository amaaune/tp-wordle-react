import { useState } from "react";
import "./App.css";
import { Grid } from "./Grid";
import "./keyboard.css";
import { Keyboard } from "./Keyboard";
import { Modal } from "./Rules";

function App() {
  return (
    <>
      <Modal />
      <Grid />
      <Keyboard />
    </>
  );
}

export default App;
