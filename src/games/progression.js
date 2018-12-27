import randomNumber from '../utils';
import { cons } from 'hexlet-pairs';
import gameEngine from '..';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getGameData = () => {
  const start = randomNumber(1, 10);
  const step = randomNumber(1, 10);
  const hiddenNumber = randomNumber(1, 10);
  let question = ' ';
  const correctAnswer = hiddenNumber * step + start;
  for (let i = 1; i < progressionLength; i += 1) {
    const currentNumber = start + step * i;
    if (currentNumber === correctAnswer) {
      question += ' .. ';
    } else {
      question += `${currentNumber} `;
    }
  }
  return cons(question, String(correctAnswer));
};

export default() => gameEngine(description, getGameData);
