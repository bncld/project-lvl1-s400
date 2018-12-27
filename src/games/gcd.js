import randomNumber from '../utils';
import { cons } from 'hexlet-pairs';
import gameEngine from '..';

const description = 'Find the greatest common divisor of given numbers.';
const getGameData = () => {
  const firstNumber = randomNumber(1, 50);
  const secondNumber = randomNumber(1, 50);
  const gcdNumResult = () => {
    let num1 = Math.abs(firstNumber);
    let num2 = Math.abs(secondNumber);
    while (num2) {
      const t = num2;
      num2 = num1 % num2;
      num1 = t;
    }
    return num1;
  };
  const question = `${firstNumber}   ${secondNumber}`;
  const answer = String(gcdNumResult(firstNumber, secondNumber));
  return cons(question, answer);
};

export default() => gameEngine(description, getGameData);
