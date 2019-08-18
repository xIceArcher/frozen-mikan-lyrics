const noCapitalise = ["no", "wa", "de", "o", "ni"];

const capitaliseFirst = str =>
  noCapitalise.includes(str)
    ? str
    : str[0].toUpperCase() + str.substring(1, str.length);

export const toUnderscore = str => {};

export const toReadable = str =>
  str
    .split("_")
    .map(word => capitaliseFirst(word))
    .join(" ");
