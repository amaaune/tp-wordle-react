import enterIcon from "./enter.png";
import deleteIcon from "./delete.png";

interface KeyboardProps {
  onKeyPress: (key: string) => void;
}

export function Keyboard({ onKeyPress }: KeyboardProps) {
  const rows = [
    ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"],
  ];

  const lastRows = [["ENTER", "W", "X", "C", "V", "B", "N", "<-"]];

  const icons: Record<string, string> = {
    ENTER: enterIcon,
    "<-": deleteIcon,
  };

  return (
    <div className="keyboard-container">
      <table className="keyboard">
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((letter) => (
                <td key={letter}>
                  <button onClick={() => onKeyPress(letter)}>{letter}</button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <table className="lastKeyboard">
        <tbody>
          {lastRows.map((lastRow, i) => (
            <tr key={i}>
              {lastRow.map((letter) => (
                <td key={letter}>
                  <button onClick={() => onKeyPress(letter)}>
                    {icons[letter] ? (
                      <img src={icons[letter]} alt={letter} className="key-icon" />
                    ) : (
                      letter
                    )}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}