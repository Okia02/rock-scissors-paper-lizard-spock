"use strict";

let userScore = 0;
let computerScore = 0;
const userScore_span =
  document.getElementById("user-score");
const computerScore_span =
  document.getElementById(
    "computer-score"
  );
const scoreBoard_div =
  document.querySelector(
    ".score-board"
  );
let result_p = document.querySelector(
  ".result > p"
);
const rock_div =
  document.getElementById("r");
const paper_div =
  document.getElementById("p");
const scissors_div =
  document.getElementById("s");
const lizard_div =
  document.getElementById("l");
const spock_div =
  document.getElementById("k");

function getComputerChoice() {
  const choices = [
    "r",
    "p",
    "s",
    "l",
    "k",
  ];
  const randomNumber = Math.floor(
    Math.random() * 5
  );
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
  if (letter === "l") return "Lizard";
  return "Spock";
}

function win(
  userChoice,
  computerChoice
) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML =
    computerScore;
  result_p.innerHTML = `${convertToWord(
    userChoice
  )} beats ${convertToWord(
    computerChoice
  )}. You win &#127881`;
}

function lose(
  userChoice,
  computerChoice
) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML =
    computerScore;
  result_p.innerHTML = `${convertToWord(
    userChoice
  )} loses to ${convertToWord(
    computerChoice
  )}. You lost... &#128128`;
}
function draw(
  userChoice,
  computerChoice
) {
  result_p.innerHTML = `${convertToWord(
    userChoice
  )} equals ${convertToWord(
    computerChoice
  )}. It's a draw &#128581`;
}

function game(userChoice) {
  const computerChoice =
    getComputerChoice();
  switch (userChoice + computerChoice) {
    case "ps":
    case "pk":
    case "sp":
    case "sl":
    case "rl":
    case "rs":
    case "lk":
    case "lp":
    case "ks":
    case "kr":
      win(userChoice, computerChoice);
      break;
    case "sp":
    case "kp":
    case "ps":
    case "ls":
    case "lr":
    case "sr":
    case "kl":
    case "pl":
    case "sk":
    case "rk":
      lose(userChoice, computerChoice);
      break;
    case "pp":
    case "rr":
    case "ss":
    case "ll":
    case "kk":
      draw(userChoice, computerChoice);
      break;
  }
}

function main(userChoice) {
  rock_div.addEventListener(
    "click",
    function () {
      game("r");
    }
  );
  paper_div.addEventListener(
    "click",
    function () {
      game("p");
    }
  );
  scissors_div.addEventListener(
    "click",
    function () {
      game("s");
    }
  );
  lizard_div.addEventListener(
    "click",
    function () {
      game("l");
    }
  );
  spock_div.addEventListener(
    "click",
    function () {
      game("k");
    }
  );
}

main();

document.querySelector('.reset').addEventListener('click',function(){
location.reload();
})