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
  console.log("Opponent plays " + computerChoice + "!");
  console.log("You play " + humanChoice + "!");

  if (humanChoice === "rock" && computerChoice === "scissors" ||
      humanChoice === "paper" && computerChoice === "rock" ||
      humanChoice === "scissors" && computerChoice === "paper") {
    return 1;
  }
  else if (computerChoice === "rock" && humanChoice === "scissors" ||
           computerChoice === "paper" && humanChoice === "rock" ||
           computerChoice === "scissors" && humanChoice === "paper") {
    return -1;
  }

  return 0;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log("Round " + i);
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    const winner = playRound(computerChoice, humanChoice);


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

  console.log("GAME OVER!");
  console.log("Final score: You - " + humanScore + " | " + computerScore + " - Opponent");

  if (humanScore > computerScore) {
    console.log("You win! Congratulations!");
  }
  else if (computerScore > humanScore) {
    console.log("You lose!");
  }
  else {
    console.log("Tie game!");
  }
}

playGame();
