import readlineSync from 'readline-sync';

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}`);
  return userName;
};

const getRandomValue = (min, max) => {
  const callMin = Math.ceil(min);
  const callmax = Math.floor(max);
  const number = Math.floor(Math.random() * (callmax - callMin)) + callMin;
  return number;
};

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

export { startGame, getRandomValue, calculator };
