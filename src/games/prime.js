import { startGame, getRandomValue, isPrime } from '../index.js';

const primeGame = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const raund = 3;
  const expressions = [];
  const results = [];
  let expressionsAndResults = [];
  for (let i = 0; i < raund; i += 1) {
    const number = getRandomValue(1, 101);
    const expression = `${number}`;
    expressions.push(expression);
    const result = String(isPrime(number));
    results.push(result);
  }
  expressionsAndResults = [expressions, results];
  startGame(expressionsAndResults, task);
};

export default primeGame;
