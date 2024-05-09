let totalScore1 = 0;
let totalScore2 = 0;
let diceImages = ["dice-1.png", "dice-2.png", "dice-3.png", "dice-4.png", "dice-5.png", "dice-6.png"];

/**
 * Rolls dice for the player.
 * @param {number} player - The player number (1 or 2).
 */
function rollDice(player) {
  const diceContainer = document.getElementById(`wizard${player}`).querySelector('.dice-container');
  const diceImg = diceContainer.querySelector('img');
  const rollResultId = `rollResult${player}`;
  const totalScoreId = `totalScore${player}`;

  const rollResult = Math.floor(Math.random() * 6) + 1;
  const resultNumber = Math.trunc(rollResult);

  setTimeout(() => {
    diceImg.src = diceImages[rollResult - 1];
    document.getElementById(rollResultId).innerText = resultNumber;
  }, 100);

  const currentPlayerScore = player === 1 ? (totalScore1 += rollResult) : (totalScore2 += rollResult);
  document.getElementById(totalScoreId).innerText = `Total Score: ${currentPlayerScore}`;

  if (currentPlayerScore >= 100) {
    alert(`Player ${player} has won the game!`);
    document.getElementById(totalScoreId).innerHTML = "Game Over";
    resetGame();
  }
}

function resetGame() {
  totalScore1 = 0;
  totalScore2 = 0;
  document.getElementById("totalScore1").innerText = "Total Score: 0";
  document.getElementById("totalScore2").innerText = "Total Score: 0";
}