import { startGame, raundsCount } from '../index.js';
import { getRandomValue } from '../support.js';

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (numberX, numberY) => {
  let a = numberX;
  let b = numberY;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else if (b > a) {
      b %= a;
    }
  }
  return a + b;
};

const gcdGame = () => {
  const expressionsAndResults = [];
  for (let i = 0; i < raundsCount; i += 1) {
    const number1 = getRandomValue(1, 100);
    const number2 = getRandomValue(1, 100);
    const expression = `${number1} ${number2}`;
    const result = String(gcd(number1, number2));
    const exprRes = [expression, result];
    expressionsAndResults.push(exprRes);
  }
  startGame(expressionsAndResults, task);
};

export default gcdGame;
