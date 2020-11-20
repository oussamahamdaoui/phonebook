const COLORS = [
  '#1abc9c',
  '#3498db',
  '#e74c3c',
  '#8e44ad',
];

const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

export {getRandomColor};