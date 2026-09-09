export function Validate(guess: string, secret: string) {
  const result = [];

  for (let i = 0; i < 5; i++) {
    if (guess[i] === secret[i]) {
      result[i] = "green";
    } else if (secret.includes(guess[i])) {
      result[i] = "orange";
    } else {
      result[i] = "grey";
    }
  }

  return result;
}
