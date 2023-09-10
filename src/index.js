import readlineSync from 'readline-sync';

const raund = 3;

const startGame = (expressionsAndResults, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}`);
  console.log(task);
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

export { startGame, raund };
