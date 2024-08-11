const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let userScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
button.addEventListener('click', () => {
 const playGame = gameRound(button.id, computerChoice());

 result.textContent = playGame;
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
  userScore++;
  userScoreEl.textContent = userScore;
return "You won! " + userPick + " beats " + computerPick;
} else{
  computerScore++;
  computerScoreEl.textContent = computerScore;
return "You lose! " + computerPick + " beats " + userPick;
}
}