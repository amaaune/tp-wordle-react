import grid from "./grid.module.css"

interface GridProps {
  currentGuess: string;
}

export function Grid({ currentGuess }: GridProps) {
  const letters = currentGuess.split(""); 

  return (
    <div className={grid.grid}>
      <div className={grid.row}>
        {[0, 1, 2, 3, 4].map((i) => (
          <div className={grid.case} key={i}>
            {letters[i] ?? ""}
          </div>
        ))}
      </div>
      <div className={grid.row}>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
      </div>
      <div className={grid.row}>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
      </div>
      <div className={grid.row}>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
      </div>
      <div className={grid.row}>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
      </div>
      <div className={grid.row}>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
        <div className={grid.case}></div>
      </div>
    </div>
  );
}