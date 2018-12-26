import randomNumber from '../randomNumber';
import { cons } from 'hexlet-pairs';
import gameSystem from '..';

const whatToDo = 'Find the greatest common divisor of given numbers.';
const gameLogic = () => {
  const firstn = randomNumber(1, 100);
  const secondm = randomNumber(1, 100);
  const gcdNumResult = (firstn, secondm) => {
    let num1 = Math.abs(firstn);
    let num2 = Math.abs(secondm);
    while (num2) {
      let t = num2;
      num2 = num1 % num2;
      num1 = t;
    }
    return num1;
  };
  const test = `${firstn}   ${secondm}`;
  const currentAns = String(gcdNumResult(firstn, secondm));
  return cons(test, currentAns);
};

export default() => gameSystem(whatToDo, gameLogic);
