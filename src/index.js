import readlineSync from 'readline-sync';

const raundsCount = 3;

const startGame = (expressionsAndResults, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}`);
  console.log(task);
  for (let i = 0; i < raundsCount; i += 1) {
    const [question, answer] = expressionsAndResults[i];
    console.log(`Question: ${question}`);
    const userAnswer = (readlineSync.question('Your answer: '));
    if (answer === userAnswer) {
      console.log('Correct!');
    } else if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { startGame, raundsCount };
