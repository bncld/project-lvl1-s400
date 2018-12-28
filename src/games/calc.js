import randomNumber from '../utils';
import { cons } from 'hexlet-pairs';
import gameEngine from '..';

const description = 'What is the result of the expression?';
const getGameData = () => {
  const operator = randomNumber(1, 3);
  const num1 = randomNumber(1, 10);
  const num2 = randomNumber(1, 10);
  let question;
  let answer;
  switch (operator) {
    case 1:
      question = `${num1} - ${num2}`;
      answer = String(num1 - num2);
      break;
    case 2:
      question = `${num1} * ${num2}`;
      answer = String(num1 * num2);
      break;
    case 3:
      question = `${num1} + ${num2}`;
      answer = String(num1 + num2);
      break;
    default:
      break;
  }
  return cons(question, answer);
};

export default() => gameEngine(description, getGameData);
