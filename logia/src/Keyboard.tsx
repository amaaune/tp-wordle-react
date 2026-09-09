export function Keyboard() {

    const rows = [
        ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"],
    ];

    const lastRows = [
        ["<-", "W", "X", "C", "V", "B", "N", "ENTER"]
    ];

return (
    <div className="keyboard-container">

        <table className="keyboard">
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i}>
                        {row.map((letter) => (
                            <td key={letter}>
                                <button>{letter}</button>
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
                                <button>{letter}</button>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
)
}