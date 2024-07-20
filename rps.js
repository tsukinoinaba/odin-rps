let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  }
  else if (randomNumber === 1) {
    return "paper";
  }
  return "scissors";
}

function getHumanChoice() {
  let humanChoice = prompt("What is your move? rock / paper / scissors");
  while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
    humanChoice = prompt("Please enter only \"rock\", \"paper\" or \"scissors\", without the quotes");
  }
  return humanChoice;
}

console.log(getHumanChoice());
