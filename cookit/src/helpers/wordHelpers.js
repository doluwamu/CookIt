export const firstLetterToUpperCase = (word) => {
  if (!word) return null;
  const wordSplit = word.split("");
  const a = wordSplit[0].toUpperCase();
  wordSplit.splice(0, 1);
  return a + wordSplit.join("");
};

export const wordBreak = (word) => {
  if (!word) return null;
  const wordSplit = word.split("");
  wordSplit.splice(15);
  return `${wordSplit.join("")}...`;
};
