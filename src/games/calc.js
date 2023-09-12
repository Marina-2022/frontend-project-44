import { startGame, raundsCount } from '../index.js';
import { getRandomValue } from '../support.js';

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
      return null;
  }
};

const calcGame = () => {
  // const expressions = [];
  // const results = [];
  const expressionsAndResults = [];
  for (let i = 0; i < raundsCount; i += 1) {
    const number1 = getRandomValue(1, 100);
    const number2 = getRandomValue(1, 100);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomValue(0, operators.length)];
    const expression = `${number1} ${operator} ${number2}`;
    // expressions.push(expression);
    const result = String(calculator(number1, number2, operator));
    // results.push(result);
    const exprRes = [expression, result];
    expressionsAndResults.push(exprRes);
  }
  startGame(expressionsAndResults, task);
};

export default calcGame;
