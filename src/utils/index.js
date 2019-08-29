const noCapitalise = ["no", "wa", "de", "o", "ni", "mo"];

const capitaliseFirst = str =>
  noCapitalise.includes(str) || str.length === 0
    ? str
    : str[0].toUpperCase() + str.substring(1, str.length);

export const toUnderscore = str =>
  str
    .split(" ")
    .map(word => word.toLowerCase())
    .join("_");

export const toReadable = str =>
  str
    .split("_")
    .map(word => capitaliseFirst(word))
    .join(" ");
