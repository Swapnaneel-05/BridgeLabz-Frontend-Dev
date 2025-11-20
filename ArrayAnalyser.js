// Create an array of 8 random scores (30–100)
let scores = Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 71) + 30
);

// Highest & lowest score
let highest = Math.max(...scores);
let lowest = Math.min(...scores);

// Average score using reduce()
let average =
    scores.reduce((sum, value) => sum + value, 0) / scores.length;

// Count students who passed (>= 50)
let passedCount = scores.filter(score => score >= 50).length;

// Summary output
console.log("Scores:", scores);
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);
console.log(`Average Score: ${average.toFixed(2)}`);
console.log(`Passed Students: ${passedCount}`);
