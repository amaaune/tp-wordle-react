export function Keyboard() {
    const rows = [
        ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"], 
        ["W", "X", "C", "V", "B", "N"]
    ]

return (
    <table className="table">
        <tbody>
                {rows.map((row, i) => (
                    <tr key={i}>
                        {row.map((letter) => (
                            <th key={letter}>{letter}</th>
                        ))}
                    </tr>
                ))}
        </tbody>
</table>)

}

