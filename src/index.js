import readlineSync from 'readline-sync';

const raundsCount = 3;

const startGame = (raundInfo, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  for (let i = 0; i < raundsCount; i += 1) {
    const [question, rightAnswer] = raundInfo[i];
    console.log(`Question: ${question}`);
    const userAnswer = (readlineSync.question('Your answer: '));
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { startGame, raundsCount };
