import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

export default (whatToDo, gameLogic) => {
  console.log('Welcome to the Brain Games!');
  console.log(whatToDo);
  const answersSteps = 3;
  const userName = readlineSync.question('May I have your name? ');
  for (let i; i < answersSteps; i += 1) {
    const testPlusAns = gameLogic();
    const test = car(testPlusAns);
    const currentAns = cdr(testPlusAns);
    console.log(`Questin: ${test}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== currentAns) {
      console.log(`'${answer}' is wrong answer :(. Correct answer was '${currentAns}'. Let's try again, ${userName}!`);
    } else {
      console.log('Correct!');
    }
  } console.log(`Congratulations, ${userName}!`);
};
