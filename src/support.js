const getRandomValue = (min, max) => {
  const callMin = Math.ceil(min);
  const callmax = Math.floor(max);
  const number = Math.floor(Math.random() * (callmax - callMin)) + callMin;
  return number;
};

const forPridicat = (evenOrPrime) => {
  const expressionsAndResults = [];
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomValue(1, 100);
    const expression = `${number}`;
    const result = String(evenOrPrime(number));
    const exprRes = [expression, result];
    expressionsAndResults.push(exprRes);
  }
  return expressionsAndResults;
};

export { getRandomValue, forPridicat };
