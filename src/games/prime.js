import { startGame } from '../index.js';
import { forPridicat, isPrime } from '../support.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
let expressionsAndResults = [];

const primeGame = () => {
  expressionsAndResults = forPridicat(isPrime);
  startGame(expressionsAndResults, task);
};

export default primeGame;
