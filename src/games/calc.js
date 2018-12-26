import randomNumber from '../randomNumber';
import { cons } from 'hexlet-pairs';
import gameSystem from '..';

const whatToDo = 'What is the result of the expression?';
const gameLogic = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const steps = randomNumber(1, 3);
  let kindOfCalc;
  let result;
  switch (steps) {
    case 1:
      kindOfCalc = '-';
      result = num1 - num2;
      break;
    case 2:
      kindOfCalc = '*';
      result = num1 * num2;
      break;
    case 3:
      kindOfCalc = '+';
      result = num1 + num2;
      break;
    default:
      break;
  }
  const test = `${num1} ${kindOfCalc} ${num2}`;
  const currentAns = result.toString();
  return cons(test, currentAns);
};

export default() => gameSystem(whatToDo, gameLogic);
