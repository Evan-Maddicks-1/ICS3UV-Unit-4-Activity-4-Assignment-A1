/**
* @author Evan Maddicks
* @version 1.0.0
* @date 2025-12-1
* @fileoverview this program will simulate a simple guessing game
*/
//Prompt user
console.log("Welcome to the Guessing Game!");
console.log("Guess a number between 1 and 10. Enter 0 to quit.");

let guess = Number(prompt("Enter your guess: "));

while (guess !== 0) {
  //Generate a random number between 1 and 10
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  if (guess === randomNumber) {
    console.log("Congratulations! You guessed the correct number: " + guess);
    break;
  } else {
    console.log("Try again.");
    guess = Number(prompt("Enter your guess: "));
  }
}

if (guess === 0) {
  console.log("Game ended. Thanks for playing!");
}
