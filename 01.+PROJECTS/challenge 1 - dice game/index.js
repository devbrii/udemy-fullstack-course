function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function rollDice() {
  var player1 = randomNum(1, 7);
  var player2 = randomNum(1, 7);

  changePlayer1 = document
    .querySelector("#player-1")
    .setAttribute("src", "./assets/" + player1 + ".png");

  changePlayer2 = document
    .querySelector("#player-2")
    .setAttribute("src", "./assets/" + player2 + ".png");

  if (player1 > player2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (player2 > player1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

// rollDice();
