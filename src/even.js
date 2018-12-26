import readlineSync from 'readline-sync';

const randomNumber = (min, max) => Math.floor((Math.random() * 10000) % (max - min)) + min;
const isEven = num => num % 2 === 0;
const rounds = 3;

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even, otherwise answer "no"');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let stepRound = 1; stepRound <= rounds; stepRound += 1) {
    const question = randomNumber(2, 50);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer :(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default evenGame;
