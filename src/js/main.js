"use strict";
console.log('hola');

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".socre-board");
const result_p = documen.querySelector(".result > p");
const rock_div = docum.getElementById("r");
const paper_div = docum.getElementById("p");
const scissors_div = docum.getElementById("s");
const lizard_div = docum.getElementById("l");
const spock_div = docum.getElementById("k");

function getComputerChoice() {
  const choices = ["r", "p", "s", "l", "k"];
  const randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
  if (letter === "l") return "Lizard";
  return "Spock";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const myChoice = text.fontcolor($ndColor);
  const compChoice = text.fontcolor($rdColor);
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${myChoice} beats ${convertToWord(computerChoice)}${compChoice}. Your win!`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const myChoice = text.fontcolor($ndColor);
  const compChoice = text.fontcolor($rdColor);
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${myChoice} loses to ${convertToWord(computerChoice)}${compChoice}. Your lost...`;
}
function draw(userChoice, computerChoice) {  
  const myChoice = text.fontcolor($ndColor);
  const compChoice = text.fontcolor($rdColor);
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${myChoice} equals ${convertToWord(computerChoice)}${compChoice}. It's a draw!`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
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
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
  lizard_div.addEventListener("click", function () {
    game("l");
  });
  spock_div.addEventListener("click", function () {
    game("k");
  });
}

main();
