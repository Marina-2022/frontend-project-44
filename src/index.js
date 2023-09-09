import readlineSync from 'readline-sync';

const startGame = (expressionsAndResults, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}`);
  console.log(task);
  const raund = 3;
  for (let i = 0; i < raund; i += 1) {
    console.log(`Question: ${expressionsAndResults[0][i]}`);
    const answer = (readlineSync.question('Your answer: '));
    if (expressionsAndResults[1][i] === answer) {
      console.log('Correct!');
    } else if (expressionsAndResults[1][i] !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expressionsAndResults[1][i]}'`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

const getEvenOrOdd = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
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

const gcd = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else if (b > a) {
      b %= a;
    }
  }
  return a + b;
};

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

export { startGame, getRandomValue, calculator };
export { gcd, getEvenOrOdd, startArithmeticProgression };
