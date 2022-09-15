const playOptions = ["rock", "paper", "scissors"];

function computerPlay() {
  let x = Math.floor(Math.random() * 3);
  return playOptions[x];
}

function getWinner(pick1, pick2) {
  console.log(pick1, pick2);
  if (
    playOptions.indexOf(pick1) - playOptions.indexOf(pick2) == 1 ||
    playOptions.indexOf(pick1) - playOptions.indexOf(pick2) == -2
  ) {
    console.log("player 1 wins");
  } else if (
    playOptions.indexOf(pick1) - playOptions.indexOf(pick2) != 0 ||
    playOptions.indexOf(pick1) - playOptions.indexOf(pick2) == 2
  ) {
    console.log("player 2 wins");
  } else {
    console.log("It's a draw");
  }
}

let player1Picks = computerPlay();
let player2Picks = computerPlay();
getWinner(player1Picks, player2Picks);
