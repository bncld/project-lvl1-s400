import randomNumber from '../utils';
import { cons } from 'hexlet-pairs';
import gameEngine from '..';

const description = 'What is the result of the expression?';
const getGameData = () => {
  const operator = randomNumber(1, 3);
  const num1 = randomNumber(1, 10);
  const num2 = randomNumber(1, 10);
  let kindOfOperator;
  let result;
  switch (operator) {
    case 1:
      kindOfOperator = '-';
      result = num1 - num2;
      break;
    case 2:
      kindOfOperator = '*';
      result = num1 * num2;
      break;
    case 3:
      kindOfOperator = '+';
      result = num1 + num2;
      break;
    default:
      break;
  }
  const question = `${num1} ${kindOfOperator} ${num2}`;
  const answer = result.toString();
  return cons(question, answer);
};

export default() => gameEngine(description, getGameData);
