let currentScore1 = 0;
let currentScore2 = 0;
let totalScore1 = 0;
let totalScore2 = 0;
let currentPlayer = 1;
let finalScore = 30;

function rollDice() {
  let diceValue = Math.floor(Math.random() * 6) + 1;
  if (diceValue === 1) {
    if (currentPlayer === 1) {
      currentScore1 = 0;
      currentPlayer = 2;
    } else {
      currentScore2 = 0;
      currentPlayer = 1;
    }
  } else {
    if (currentPlayer === 1) {
      currentScore1 += diceValue;
    } else {
      currentScore2 += diceValue;
    }
  }

  updateUI();
}

function hold() {
  if (currentPlayer === 1) {
    totalScore1 += currentScore1;
    currentScore1 = 0;
    currentPlayer = 2;
  } else {
    totalScore2 += currentScore2;
    currentScore2 = 0;
    currentPlayer = 1;
  }

  checkWinner();
  updateUI();
}

function newGame() {
  currentScore1 = 0;
  currentScore2 = 0;
  totalScore1 = 0;
  totalScore2 = 0;
  currentPlayer = 1;
  updateUI();
}

function updateUI() {
  document.getElementById("current-score-1").textContent = currentScore1;
  document.getElementById("total-score-1").textContent = totalScore1;
  document.getElementById("current-score-2").textContent = currentScore2;
  document.getElementById("total-score-2").textContent = totalScore2;
  finalScore = parseInt(document.getElementById("final-score").value);
}

function checkWinner() {
  if (totalScore1 >= finalScore) {
    alert("Player 1 Wins!");
    newGame();
  } else if (totalScore2 >= finalScore) {
    alert("Player 2 Wins!");
    newGame();
  }
}

updateUI();
