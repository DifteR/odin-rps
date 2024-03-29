const playOptions = ["rock", "paper", "scissors"];

var currentScore = 0;
var highScore = 0;

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
    resultsDiv.style.backgroundColor = "green";
    resultsDiv.textContent = "YOU WON!";
    currentScore += 3;
    if (highScore < currentScore) {
      highScore = currentScore;
    }
    resultsDiv.style.backgroundColor = "green";
    resultsDiv.textContent =
      "YOU WON! Your current score is: " + currentScore + "\r\n";
    resultsDiv.textContent += "Your highest score is: " + highScore;
    return "You win";
  } else if (
    playOptions.indexOf(pick1) - playOptions.indexOf(pick2) != 0 ||
    playOptions.indexOf(pick1) - playOptions.indexOf(pick2) == 2
  ) {
    resultsDiv.style.backgroundColor = "red";
    currentScore = 0;
    resultsDiv.textContent = "YOU LOST :(";
    resultsDiv.textContent += "Your highest score is: " + highScore;
    return "Computer wins";
  } else {
    resultsDiv.style.backgroundColor = "orange";
    resultsDiv.textContent =
      "It's a draw! Your current score is: " + currentScore;
    resultsDiv.textContent += "Your highest score is: " + highScore;
    return "It's a draw";
  }
}

var resultsDiv = document.getElementById("results");

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
