import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const numberOfRound = 3;
export default (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  for (let i = 1; i <= numberOfRound; i += 1) {
    const gameData = getGameData();
    const question = car(gameData);
    const answer = cdr(gameData);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`${userAnswer} is wrong answer :(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
