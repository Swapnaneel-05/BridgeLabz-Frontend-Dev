// Declare variables
let userName = "Swapnaneel"; 
let currentHour = new Date().getHours();

// Determine greeting
let greeting;

if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} 
else if (currentHour >= 12 && currentHour < 17) {
    greeting = `Good Afternoon ${userName}!`;
} 
else {
    greeting = `Good Evening ${userName}!`;
}

// Output the message
console.log(greeting);
