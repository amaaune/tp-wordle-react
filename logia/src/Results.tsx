interface ResultsProps {
    word: string;
    success: boolean;
}

export function Results({ word, success }: ResultsProps) {
    return (
    <div>
        {success ? (
        <p>Bravo, tu as trouvé le mot !</p>
        ) : (
        <p>Dommage, le mot était : <strong>{word}</strong></p>
        )}
    </div>
    );
}   