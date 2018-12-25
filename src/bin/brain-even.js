import startGame from 'brain-games.js';
import greeting from '..';

const isEven = num => num % 2 === 0;
const randomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
const evenRules =  () => 'Answer "yes" if number even, otherwise answer "no"';

startGame();
evenRules();

const startEven = () => {
  const numToAck = randomNumber(1,50);
  const check = isEven(numToAck) ? 'yes' : 'no';
  return (numToAck, check);
  const roundStep = () => {
    switch(chech):
      case 'yes': 
        Console.log('Current!');
        break;
      case 'no':
        Console.log(`"yes" is wrong answer ;(. Correct answer was "no". Let\'s try again, ${userName}!`);
  }
};
