import { startGame } from '../index.js';
import { forPridicat, isEven } from '../support.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
let expressionsAndResults = [];

const evenGame = () => {
  expressionsAndResults = forPridicat(isEven);
  startGame(expressionsAndResults, task);
};

export default evenGame;
