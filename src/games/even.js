import { startGame } from '../index.js';
import { forPridicat, isEven } from '../support.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  startGame(forPridicat(isEven), task);
};

export default evenGame;
