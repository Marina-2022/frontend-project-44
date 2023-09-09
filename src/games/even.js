import { startGame, getRandomValue, getEvenOrOdd } from '../index.js';

const evenGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const raund = 3;
  const expressions = [];
  const results = [];
  let expressionsAndResults = [];
  for (let i = 0; i < raund; i += 1) {
    const number = getRandomValue(1, 100);
    const expression = `${number}`;
    expressions.push(expression);
    const result = String(getEvenOrOdd(number));
    results.push(result);
  }
  expressionsAndResults = [expressions, results];
  startGame(expressionsAndResults, task);
};

export default evenGame;
