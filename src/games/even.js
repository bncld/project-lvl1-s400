import randomNumber from '../utils';
import { cons } from 'hexlet-pairs';
import gameEngine from '..';

const isEven = num => num % 2 === 0;
const description = 'Answer "yes" if number even, otherwise answer "no"';
const getGameData = () => {
  const question = randomNumber(2, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default() => gameEngine(description, getGameData);
