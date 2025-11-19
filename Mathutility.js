let x = 16.75;

// Calculations
let rounded = Math.round(x);
let squareRoot = Math.sqrt(x);
let power3 = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10;

// Summary using template literals
let result = `
Math Utility Dashboard
-----------------------
Original Number: ${x}
Rounded Value: ${rounded}
Square Root: ${squareRoot}
x³ (Power): ${power3}
Random Number (10–50): ${randomNumber}
`;

console.log(result);
