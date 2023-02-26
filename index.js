let userScore = 0;
let computerScore = 0;

function getComputerElementChoice() {
  const computerElementalChoices = ['earth', 'water', 'fire', 'wind'];
  const randomNumber = Math.floor(Math.random() * 4);
  return computerElementalChoices[randomNumber];
}
