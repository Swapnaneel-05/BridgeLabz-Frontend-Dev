// Generate random secret number between 1–50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Test value for guess
let userGuess = 22;

console.log("Secret:", secretNumber);
console.log("Your Guess:", userGuess);

// Guess checking
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} 
else {
    // Check closeness using range ±3
    if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
        console.log("Very close!");
    } 
    else if (userGuess > secretNumber) {
        console.log("Too high");
    } 
    else {
        console.log("Too low");
    }
}
