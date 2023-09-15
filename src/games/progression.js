import { startGame, raundsCount } from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What number is missing in the progression?';
const lengthProgression = getRandomNumber(5, 9);

const getArithmeticProgression = (firstNumber, step, length) => {
  const progressions = [];
  for (let i = 0; i < length; i += 1) {
    const summ = (firstNumber + (i * step));
    progressions.push(summ);
  }
  return progressions;
};

const startProgressionGame = () => {
  const raundInfo = [];
  for (let i = 0; i < raundsCount; i += 1) {
    const firstNumber = getRandomNumber(1, 101);
    const step = getRandomNumber(1, 6);
    const arithmeticProgression = getArithmeticProgression(firstNumber, step, lengthProgression);
    const randomMissIndex = getRandomNumber(0, arithmeticProgression.length - 1);
    const rightAnswer = `${arithmeticProgression[randomMissIndex]}`;
    arithmeticProgression[randomMissIndex] = '..';
    const question = `${arithmeticProgression.join(' ')}`;
    raundInfo.push([question, rightAnswer]);
  }
  startGame(raundInfo, task);
};

export default startProgressionGame;
