
const getUserChoice = (userInput) => {
 if (userInput.toLowerCase() === 'rock'){
  return userInput;
  }
 else if (userInput.toLowerCase() === 'paper'){
    return userInput;
  }
  else if (userInput.toLowerCase() === 'scissors'){
    return userInput;
  }
  else {console.log('Not Valid. Danger Will Robinson!')}
  };

const getComputerChoice = () => {
  const randomNumber = (Math.floor(Math.random() * 3));
  if (randomNumber === 0){
    return 'Rock';
  }
  else if (randomNumber === 1){
    return 'Paper';
  }
  else if (randomNumber === 2){
  return 'Scissors';
  }
    }

const determineWinner = (userChoice,computerChoice) => {
  if (userChoice === computerChoice){
    return 'The game is a tie!';
  }
  else if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'The computer wins!';
    }
    else {
      return 'You won!';
    }
  }
  else if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'The computer wins!';
    }
    else {
      return 'You won!';
    }
  }
  else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer wins!';
    }
    else {
      return 'You won!';
    }
  }
  
}


const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
console.log('You threw:' + userChoice);
console.log('The computer threw:' + computerChoice);
console.log(determineWinner(userChoice, computerChoice));
};

playGame();

