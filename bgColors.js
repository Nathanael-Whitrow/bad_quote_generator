// Background colors for the bad_quote_machine
const bgColors = [
  "#092327",
  "#3b252c",
  "#8f6593",
  "#621708",
  "#564787"
];

let index = Math.floor(Math.random() * bgColors.length);

export function getColor() {
  index = (index + 1) % bgColors.length;
  return bgColors[index];
}

