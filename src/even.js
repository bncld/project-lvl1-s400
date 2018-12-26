import readlineSync from 'readline-sync';

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even, otherwise answer "no"');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  let rundNum = randomNumber(0, 50);
  const isEven = num => num % 2 === 0;
  const correctAnswer = isEven(rundNum) ? 'yes' : 'no';
  const rounds = 3;
  for (let stepRound = 1; stepRound <= rounds; stepRound += 1) {
    console.log(`Question: ${rundNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer :(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
    } else {
      console.log('Correct!');
    }
  } console.log(`Congratulations, ${userName}!`);
};
export default evenGame;
