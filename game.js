const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
button.addEventListener('click', () => {
 const play = gameRound(button.id, computerChoice());
 console.log(play);
  });
});

function computerChoice() {
const choiceArray = ['rock', 'paper', 'scissors'];
const randomChoice = Math.floor(Math.random() * choiceArray.length);
return choiceArray[randomChoice];
}

function gameRound(userPick, computerPick) {
if (userPick === computerPick) {
return "It's a tie!";
} else if (
(userPick === 'rock' && computerPick === 'scissors') ||
(userPick === 'scissors' && computerPick === 'paper') ||
(userPick === 'paper' && computerPick === 'rock')
){
return "You win! " + userPick + " beats " + computerPick;
} else{
return "You lose! " + computerPick + " beats " + userPick;
}
}