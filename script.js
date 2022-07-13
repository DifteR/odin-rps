function computerPlay() {
  const playOptions = ["rock", "paper", "scissors"];
  let x = Math.floor(Math.random() * 3);
  return playOptions[x];
}

computerPlay();
