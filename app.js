let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win() {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win! `;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove('green-glow')
  }, 1000)
}

function lose() {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. Computer Win! `;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove('red-glow')
  }, 1000)
}

function draw() {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(computerChoice)} equals ${convertToWord(userChoice)}. It's a Draw! `
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove('gray-glow')
  }, 1000)
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rp":
    case "sr":
    case "ps":
      lose();
      break;
    case "pr":
    case "rs":
    case "sp":
      win();
      break;
    case "rr":
    case "pp":
    case "ss":
      draw();
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p");
  })

  scissors_div.addEventListener('click', function() {
    game("s");
  })
}

main();
