import readlineSync from 'readline-sync';

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 1;
  while (i <= 3) {
    const getRandomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${getRandomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if ((getRandomNumber % 2 === 0 && answer === 'yes') || (getRandomNumber % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (getRandomNumber % 2 === 0 && answer === 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'`);
      return console.log(`Let's try again, ${userName}!`);
    } else if (getRandomNumber % 2 !== 0 && answer === 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'`);
      return console.log(`Let's try again, ${userName}!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(.`);
      return console.log(`Let's try again, ${userName}!`);
    }
    i += 1;
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default startGame;
