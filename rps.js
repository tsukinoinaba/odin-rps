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

for (let i = 0; i < 5; i++) {
  console.log(getComputerChoice());
}
