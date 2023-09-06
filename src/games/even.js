import readlineSync from 'readline-sync';
import { startGame, getRandomValue } from '../index.js';

const evenGame = () => {
  const userName = startGame();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 1;
  while (i <= 3) {
    const number = getRandomValue(1, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (number % 2 === 0 && answer === 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'`);
      return console.log(`Let's try again, ${userName}!`);
    } else if (number % 2 !== 0 && answer === 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'`);
      return console.log(`Let's try again, ${userName}!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(.`);
      return console.log(`Let's try again, ${userName}!`);
    }
    i += 1;
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default evenGame;
