import { startGame, raundsCount } from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNumber) => {
  if (randomNumber === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(randomNumber); i += 1) {
    const result = randomNumber % i;
    if (result === 0) {
      return false;
    }
  }
  return true;
};

const startPrimeGame = () => {
  const raundInfo = [];
  for (let i = 0; i < raundsCount; i += 1) {
    const number = getRandomNumber(1, 100);
    const question = `${number}`;
    const rightAnswer = String(isPrime(number) ? 'yes' : 'no');
    raundInfo.push([question, rightAnswer]);
  }
  startGame(raundInfo, task);
};

export default startPrimeGame;
