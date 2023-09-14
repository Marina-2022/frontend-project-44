import { startGame, raundsCount } from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGCD = (numberX, numberY) => {
  if (numberX === numberY) {
    return numberX;
  }
  let a = numberX;
  let b = numberY;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else if (b > a) {
      b %= a;
    }
  }
  return a + b;
};

const startGcdGame = () => {
  const raundInfo = [];
  for (let i = 0; i < raundsCount; i += 1) {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    const question = `${number1} ${number2}`;
    const rightAnswer = String(getGCD(number1, number2));
    raundInfo.push([question, rightAnswer]);
  }
  startGame(raundInfo, task);
};

export default startGcdGame;
