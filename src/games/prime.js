import randomNumber from '../utils';
import { cons } from 'hexlet-pairs';
import gameEngine from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const upperBorder = number / 2;
  for (let i = 1; i <= upperBorder; i += 1) {
    if (number % i === 0 || number < 2) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = randomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default() => gameEngine(description, getGameData);
