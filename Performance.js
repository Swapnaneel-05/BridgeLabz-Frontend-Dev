// Marks of 5 subjects
let marks = [78, 85, 92, 60, 88];  

// Calculate total
let total = 0;
for (let m of marks) {
    total += m;
}

// Average and percentage
let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

// Check if any subject is below 35 → automatic detention
let hasFail = marks.some(mark => mark < 35);

// Decision logic
if (hasFail) {
    console.log("Detained (failed in at least one subject)");
}
else if (percentage >= 85) {
    console.log("Promoted with Distinction");
}
else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
}
else {
    console.log("Detained");
}

// Display results
console.log(`Total: ${total}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
