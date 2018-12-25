import startGame from 'brain-games.js';

startGame();
const gameRules = 'Answer "yes" if number even, otherwise answer "no"';
const correctNumber = () => {
  const randomNumber = () => {
    return Math.floor(Math.random()*(30-1+1)+1)
  };
  const numToAnswer = randomNumber();
  const qustion = String(numToAnswer);
  const answer = isEven(question) ? 'yes' : 'no';
  return (qustion, answer)
};

