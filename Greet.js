function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback(); // execute callback after greeting
}

function showEndMessage() {
  console.log("Welcome to the course!");
}

// Demonstration
greetUser("Swapnaneel", showEndMessage);
