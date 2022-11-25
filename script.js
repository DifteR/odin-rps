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
    console.log("You win");
    return "You win";
  } else if (
    playOptions.indexOf(pick1) - playOptions.indexOf(pick2) != 0 ||
    playOptions.indexOf(pick1) - playOptions.indexOf(pick2) == 2
  ) {
    console.log("Computer wins");
    return "Computer wins";
  } else {
    console.log("It's a draw");
    return "It's a draw";
  }
}

document
  .getElementById("rock")
  .addEventListener("click", () => getWinner("rock", computerPlay()));
document
  .getElementById("paper")
  .addEventListener("click", () => getWinner("paper", computerPlay()));
document
  .getElementById("scissors")
  .addEventListener("click", () => getWinner("scissors", computerPlay()));

//const rockButton = document.getElementById("rock");
//rockButton.addEventListener("click", console.log("bla"));
//getWinner("rock", computerPlay());

//const paperButton = document.getElementById("paper");
//paperButton.addEventListener("click", getWinner("paper", computerPlay()));
