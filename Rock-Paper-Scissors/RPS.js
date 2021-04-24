const getUserChoice = userInput =>{
userInput = userInput.toLowerCase();
if(userInput==='rock' || userInput==='paper' ||userInput==='scissors'){
  return userInput;
}
else{
  console.log('choose the coorect word or type.');
}
};

const getComputerChoice = () =>{
let choice = Math.floor(Math.random()*2);
switch(choice){
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
}
};

const determineWinner = (userChoice, computerChoice)=>{
if(userChoice === computerChoice){
  return 'The game was a tie.';
}
if(userChoice==='rock'){
  if(computerChoice==='paper'){
    return 'Computer Won.';
  }else{
    return 'User Won.'
  }
}else if(userChoice==='paper'){
  if(computerChoice==='rock'){
    return 'User Won.';
  }else{
    return 'Computer Won.'
  }
}else if(userChoice==='scissors'){
  if(computerChoice==='paper'){
    return 'User Won.';
  }else{
    return 'Computer Won.'
  }
}
};

const playGame = () =>{
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log(`User Choice = ${userChoice} and Computer Choice = ${computerChoice}`);

  console.log( determineWinner(userChoice,computerChoice));

}

playGame();
