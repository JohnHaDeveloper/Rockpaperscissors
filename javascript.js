const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const result = document.getElementById("result");
const resetBtnContainer = document.getElementById("reset-btn-container");

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function win(playerChoice, computerChoice) {
  playerScore++;
  playerScoreSpan.textContent = playerScore;
  result.textContent = `${playerChoice} beats ${computerChoice}. You win!`;
  checkGameEnd();
}

function lose(playerChoice, computerChoice) {
  computerScore++;
  computerScoreSpan.textContent = computerScore;
  result.textContent = `${computerChoice} beats ${playerChoice}. You lose!`;
  checkGameEnd();
}

function draw(playerChoice, computerChoice) {
  result.textContent = "It's a draw!";
  checkGameEnd();
}

function checkGameEnd() {
  if (playerScore === 5) {
    result.textContent = "Game over. You won!";
    disableButtons();
    addResetButton();
  } else if (computerScore === 5) {
    result.textContent = "Game over. You lost!";
    disableButtons();
    addResetButton();
  }
}

function game(playerChoice) {
  const computerChoice = getComputerChoice();
  switch (playerChoice + "-" + computerChoice) {
    case "rock-scissors":
    case "paper-rock":
    case "scissors-paper":
      win(playerChoice, computerChoice);
      break;
    case "rock-paper":
    case "paper-scissors":
    case "scissors-rock":
      lose(playerChoice, computerChoice);
      break;
    case "rock-rock":
    case "paper-paper":
    case "scissors-scissors":
      draw(playerChoice, computerChoice);
      break;
  }
}

function disableButtons() {
  const choicesBtns = document.querySelectorAll(".choice");
  choicesBtns.forEach((button) => {
    button.disabled = true;
  });
}

function addResetButton() {
  const resetBtn = document.createElement("button");
  resetBtn.id = "reset-btn";
  resetBtn.textContent = "Reset";
  resetBtnContainer.appendChild(resetBtn);
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    result.textContent = "Choose your weapon!";
    enableButtons();
  }
  

function enableButtons() {
  const choicesBtns = document.querySelectorAll(".choice");
  choicesBtns.forEach((button) => {
    button.disabled = false;
  });
}

const choicesBtns = document.querySelectorAll(".choice");
choicesBtns.forEach((button) => {
  button.addEventListener("click", function () {
    const playerChoice = this.id;
    game(playerChoice);
  });
});

document.getElementById("reset-btn").addEventListener("click", function() {
    reset();
  });
  

  