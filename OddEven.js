let numbers = [];
let results = [];

// Fill array with numbers 1–30
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

// Analyze each number
for (let num of numbers) {

    if (num % 3 === 0 && num % 5 === 0) {
        results.push("FizzBuzz");
    }
    else if (num % 2 === 0) {
        results.push("Even");
    }
    else {
        results.push("Odd");
    }
}

console.log("Numbers:", numbers);
console.log("Analysis:", results);
