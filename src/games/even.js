import { startGame } from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const startEvenGame = () => {
  const raundInfo = [];
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(1, 100);
    const question = `${number}`;
    const rightAnswer = String(isEven(number) ? 'yes' : 'no');
    raundInfo.push([question, rightAnswer]);
  }
  startGame(raundInfo, task);
};

export default startEvenGame;
