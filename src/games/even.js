import { startGame } from '../index.js';
import { forPridicat } from '../support.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenGame = () => {
  startGame(forPridicat(isEven), task);
};

export default evenGame;
