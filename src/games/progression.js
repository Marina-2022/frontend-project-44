import { startGame, getRandomValue, startArithmeticProgression } from '../index.js';

const progressionGame = () => {
  const task = 'What number is missing in the progression?';
  const raund = 3;
  const expressions = [];
  const results = [];
  let expressionsAndResults = [];

  const missNumber = '..';
  for (let i = 0; i < raund; i += 1) {
    const arithmeticProgression = startArithmeticProgression();
    const randomMissIndex = getRandomValue(0, arithmeticProgression.length - 1);
    const result = `${arithmeticProgression[randomMissIndex]}`;
    arithmeticProgression[randomMissIndex] = missNumber;
    const expression = `${arithmeticProgression.join(' ')}`;
    expressions.push(expression);
    results.push(result);
  }
  expressionsAndResults = [expressions, results];
  startGame(expressionsAndResults, task);
};

export default progressionGame;