interface GridProps {
  currentGuess: string;
}

export function Grid({ currentGuess }: GridProps) {
  const letters = currentGuess.split(""); // "AB" devient ["A", "B"]

  return (
    <div className="grid">
      <div className="row">
        {[0, 1, 2, 3, 4].map((i) => (
          <div className="case" key={i}>
            {letters[i] ?? ""}
          </div>
        ))}
      </div>
      <div className="row">
        <div className="case"></div>
        <div className="case"></div>
        <div className="case"></div>
        <div className="case"></div>
        <div className="case"></div>
      </div>
      <div className="row">
        <div className="case"></div>
        <div className="case"></div>
        <div className="case"></div>
        <div className="case"></div>
        <div className="case"></div>
      </div>
      <div className="row">
        <div className="case"></div>
        <div className="case"></div>
        <div className="case"></div>
        <div className="case"></div>
        <div className="case"></div>
      </div>
      <div className="row">
        <div className="case"></div>
        <div className="case"></div>
        <div className="case"></div>
        <div className="case"></div>
        <div className="case"></div>
      </div>
      <div className="row">
        <div className="case"></div>
        <div className="case"></div>
        <div className="case"></div>
        <div className="case"></div>
        <div className="case"></div>
      </div>
    </div>
  );
}