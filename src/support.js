const isEven = (number) => {
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

const isPrime = (number) => {
  if (number === 1) {
    return 'no';
  }
  const max = number;
  const arr = [];
  for (let i = 2; i < max; i += 1) {
    const result = number % i;
    arr.push(result);
  }
  if (arr.includes(0)) {
    return 'no';
  }
  return 'yes';
};

const forPridicat = (evenOrPrime) => {
  const expressions = [];
  const results = [];
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomValue(1, 101);
    const expression = `${number}`;
    expressions.push(expression);
    const result = String(evenOrPrime(number));
    results.push(result);
  }
  return [expressions, results];
};

export {
  getRandomValue, calculator, gcd, isEven, startArithmeticProgression, isPrime,
  forPridicat,
};
