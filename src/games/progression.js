import { startGame, raundsCount } from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const startArithmeticProgression = () => {
  const progressions = [];
  const firstNumber = getRandomNumber(1, 101);
  const step = getRandomNumber(1, 6);
  const item = getRandomNumber(5, 9);
  let sum1 = firstNumber + step;
  progressions.push(firstNumber, sum1);
  for (let i = 0; i < item; i += 1) {
    sum1 += step;
    progressions.push(sum1);
  }
  return progressions;
};

const startProgressionGame = () => {
  const raundInfo = [];
  const missNumber = '..';
  for (let i = 0; i < raundsCount; i += 1) {
    const arithmeticProgression = startArithmeticProgression();
    const randomMissIndex = getRandomNumber(0, arithmeticProgression.length - 1);
    const rightAnswer = `${arithmeticProgression[randomMissIndex]}`;
    arithmeticProgression[randomMissIndex] = missNumber;
    const question = `${arithmeticProgression.join(' ')}`;
    raundInfo.push([question, rightAnswer]);
  }
  startGame(raundInfo, task);
};

export default startProgressionGame;
