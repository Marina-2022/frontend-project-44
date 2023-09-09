import { startGame, getRandomValue, gcd } from '../index.js';

const gcdGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const raund = 3;
  const expressions = [];
  const results = [];
  let expressionsAndResults = [];
  for (let i = 0; i < raund; i += 1) {
    const number1 = getRandomValue(1, 100);
    const number2 = getRandomValue(1, 100);
    const expression = `${number1} ${number2}`;
    expressions.push(expression);
    const result = String(gcd(number1, number2));
    results.push(result);
  }
  expressionsAndResults = [expressions, results];
  startGame(expressionsAndResults, task);
};

export default gcdGame;
