import {
  startGame, getRandomValue, calculator, raund,
} from '../index.js';

const task = 'What is the result of the expression?';
const expressions = [];
const results = [];
let expressionsAndResults = [];

const calcGame = () => {
  for (let i = 0; i < raund; i += 1) {
    const number1 = getRandomValue(1, 100);
    const number2 = getRandomValue(1, 100);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomValue(0, operators.length)];
    const expression = `${number1} ${operator} ${number2}`;
    expressions.push(expression);
    const result = String(calculator(number1, number2, operator));
    results.push(result);
  }
  expressionsAndResults = [expressions, results];
  startGame(expressionsAndResults, task);
};

export default calcGame;
