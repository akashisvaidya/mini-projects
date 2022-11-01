console.log("hi");

// The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.

const getUserChoice = (userInput) => {
  // Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations, begin by utilizing JavaScript’s toLowerCase() function to make the userInput all lowercase.
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Please Input a valid choice");
  }
};

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  console.log(num);
  if (num === 0) {
    return "paper";
  } else if (num === 1) {
    return "rock";
  } else {
    return "scissors";
  }
}
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game was a tie";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won";
    } else {
      return "You won";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won";
    } else {
      return "You won";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won";
    } else {
      return "You won";
    }
  }

  if (userChoice === "bomb") {
    return "You won";
  }
}

function playGame() {
  let userChoice = getUserChoice("Bomb");
  let computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
