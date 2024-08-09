const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
button.addEventListener('click', () => {
console.log("user clicked", button.id, 
  "computer picked", computerChoice());
  });
});

function computerChoice() {
const choiceArray = ['rock', 'paper', 'scissors'];
const randomChoice = Math.floor(Math.random() * choiceArray.length);
return choiceArray[randomChoice];
}