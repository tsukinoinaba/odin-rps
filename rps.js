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
  humanChoice = humanChoice.toLowerCase();
  while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
    humanChoice = prompt("Please enter only \"rock\", \"paper\" or \"scissors\", without the quotes (case insensitive");
  }
  return humanChoice;
}

function playRound(computerChoice, humanChoice) {
  let winner = 0;

  console.log("Opponent plays " + computerChoice + "!");
  console.log("You play " + humanChoice + "!");

  if (humanChoice === "rock" && computerChoice === "scissors" ||
      humanChoice === "paper" && computerChoice === "rock" ||
      humanChoice === "scissors" && computerChoice === "paper") {
    winner = 1;
  }
  else if (computerChoice === "rock" && playerChoice === "scissors" ||
           computerChoice === "paper" && playerChoice === "rock" ||
           computerChoice === "scissors" && playerChoice === "paper") {
    winner = -1;
  }

  if (winner === 1) {
    console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
    humanScore++;
  }
  else if (winner === -1) {
    console.log("Opponent wins! " + computerChoice + " beats " + humanChoice + "!");
    computerScore++;
  }
  else {
    console.log("Tie!");
  }
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();
playRound(computerChoice, humanChoice);
