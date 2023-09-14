import { startGame, raundsCount } from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What is the result of the expression?';

const calculator = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return `Unknown operator: ${operator}`;
  }
};

const startCalcGame = () => {
  const raundInfo = [];
  for (let i = 0; i < raundsCount; i += 1) {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomNumber(0, operators.length)];
    const question = `${number1} ${operator} ${number2}`;
    const rightAnswer = String(calculator(number1, number2, operator));
    raundInfo.push([question, rightAnswer]);
  }
  startGame(raundInfo, task);
};

export default startCalcGame;
