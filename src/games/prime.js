import { startGame } from '../index.js';
import { forPridicat } from '../support.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) {
    return 'no';
  }
  const max = number;
  const arr = [];
  for (let i = 2; i < max; i += 1) {
    const result = number % i;
    arr.push(result);
  }
  if (arr.includes(0)) {
    return 'no';
  }
  return 'yes';
};

const primeGame = () => {
  // let expressionsAndResults = [];
  // expressionsAndResults = forPridicat(isPrime);
  startGame(forPridicat(isPrime), task);
};

export default primeGame;
