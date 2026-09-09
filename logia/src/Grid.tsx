import grid from "./grid.module.css";
import type { Try } from "./App";

interface GridProps {
  currentGuess: string;
  result: string[];
  history: Try[];
}

export function Grid({ currentGuess, result, history }: GridProps) {
  const letters = currentGuess.split("");

  return (
    <div className={grid.grid}>
      {history.map((essai, index) => (
        <div className={grid.row} key={index}>
          {[0, 1, 2, 3, 4].map((i) => (
            <div className={`${grid.case} ${grid[essai.result[i]]}`} key={i}>
              {essai.guess.split("")[i] ?? ""}
            </div>
          ))}
        </div>
      ))}
      <div className={grid.row}>
        {[0, 1, 2, 3, 4].map((i) => (
          <div className={`${grid.case} ${grid[result[i]]}`} key={i}>
            {letters[i] ?? ""}
          </div>
        ))}
      </div>
      {Array(5 - history.length)
        .fill("")
        .map((_, i) => (
          <div className={grid.row} key={i}>
            {[0, 1, 2, 3, 4].map((j) => (
              <div className={grid.case} key={j}></div>
            ))}
          </div>
        ))}
    </div>
  );
}
