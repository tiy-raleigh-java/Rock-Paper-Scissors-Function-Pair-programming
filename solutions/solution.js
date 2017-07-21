// Rock Paper Scissors Function
function rps (choice1, choice2) {
  if (choice1 === choice2) {
    return "The result is a tie!";
  } else if (choice1 === "rock") {
    if (choice2 === "scissors") {
      return "rock wins";
    } else {
      return "paper wins";
    }
  } else if (choice1 === "paper") {
    if (choice2 === "rock") {
      return "paper wins";
    } else {
      return "scissors wins";
    }
  } else if (choice1 === "scissors") {
    if (choice2 === "rock") {
      return "rock wins";
    } else {
      return "scissors wins";
    }
  }

}

// Don't edit below these lines
console.log(rps('rock', 'paper'));
console.log(rps('scissors', 'paper'));
console.log(rps('scissors', 'rock'));
console.log(rps('rock', 'rock'));
