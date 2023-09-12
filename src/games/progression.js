import { startGame, raundsCount } from '../index.js';
import { getRandomValue } from '../support.js';

const task = 'What number is missing in the progression?';

const startArithmeticProgression = () => {
  const progressions = [];
  const firstNumber = getRandomValue(1, 101);
  const step = getRandomValue(1, 6);
  const item = getRandomValue(5, 9);
  let sum1 = firstNumber + step;
  progressions.push(firstNumber, sum1);
  for (let i = 0; i < item; i += 1) {
    sum1 += step;
    progressions.push(sum1);
  }
  return progressions;
};

const progressionGame = () => {
  const expressionsAndResults = [];
  const missNumber = '..';
  for (let i = 0; i < raundsCount; i += 1) {
    const arithmeticProgression = startArithmeticProgression();
    const randomMissIndex = getRandomValue(0, arithmeticProgression.length - 1);
    const result = `${arithmeticProgression[randomMissIndex]}`;
    arithmeticProgression[randomMissIndex] = missNumber;
    const expression = `${arithmeticProgression.join(' ')}`;
    const exprRes = [expression, result];
    expressionsAndResults.push(exprRes);
  }
  startGame(expressionsAndResults, task);
};

export default progressionGame;
