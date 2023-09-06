import readlineSync from 'readline-sync';
import { startGame, getRandomValue, calculator } from '../index.js';

const calcGame = () => {
  const userName = startGame();

  console.log('What is the result of the expression?');

  let i = 1;
  while (i <= 3) {
    const number1 = getRandomValue(1, 100);
    const number2 = getRandomValue(1, 100);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomValue(0, operators.length)];
    const expression = `${number1} ${operator} ${number2}`;
    const result = String(calculator(number1, number2, operator));
    console.log(`Question: ${expression}`);
    const answer = (readlineSync.question('Your answer: '));
    if (result === answer) {
      console.log('Correct!');
    } else if (result !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
      return console.log(`Let's try again, ${userName}!`);
    }
    i += 1;
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default calcGame;
