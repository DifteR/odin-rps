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
    //console.log("You win");
    return "You win";
  } else if (
    playOptions.indexOf(pick1) - playOptions.indexOf(pick2) != 0 ||
    playOptions.indexOf(pick1) - playOptions.indexOf(pick2) == 2
  ) {
    //console.log("Computer wins");
    return "Computer wins";
  } else {
    return "It's a draw";
    //console.log("It's a draw");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerPicks = prompt(
      "Pick between rock, paper and scissors"
    ).toLowerCase();
    let computerPicks = computerPlay();
    console.log(getWinner(playerPicks, computerPicks));
  }
}
game();
