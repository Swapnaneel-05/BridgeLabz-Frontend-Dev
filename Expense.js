// Array of expenses (food, travel, rent, bills, leisure)
let expenses = [5000, 1200, 15000, 3000, 2000];

// Calculate total
let total = 0;
for (let amount of expenses) {
    total += amount;
}

// Calculate average
let average = total / expenses.length;

// Add 10% tax using assignment operator
let finalAmount = total;
finalAmount += finalAmount * 0.10; // add 10% tax

// Display results
console.log("Total Expenses:", total.toFixed(2));
console.log("Average Expense:", average.toFixed(2));
console.log("Final Amount (after 10% tax):", finalAmount.toFixed(2));
