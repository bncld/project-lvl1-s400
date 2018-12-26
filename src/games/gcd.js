import randomNumber from '../randomNumber';
import { cons } from 'hexlet-pairs';
import gameSystem from '..';

const whatToDo = 'Find the greatest common divisor of given numbers.';
const gameLogic = () => {
  const firstn = randomNumber(1, 50);
  const secondn = randomNumber(1, 50);
  const gcdNumResult = () => {
    let num1 = Math.abs(firstn);
    let num2 = Math.abs(secondn);
    while (num2) {
      const t = num2;
      num2 = num1 % num2;
      num1 = t;
    }
    return num1;
  };
  const test = `${firstn}   ${secondn}`;
  const currentAns = String(gcdNumResult(firstn, secondn));
  return cons(test, currentAns);
};

export default() => gameSystem(whatToDo, gameLogic);
