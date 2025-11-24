"use strict";

// Custom error classes
class InvalidOperationError extends Error {
  constructor(op) {
    super(`Invalid operation: ${op}`);
    this.name = "InvalidOperationError";
  }
}
class DivideByZeroError extends Error {
  constructor() {
    super("Cannot divide by zero");
    this.name = "DivideByZeroError";
  }
}
class NegativeRootError extends Error {
  constructor(value) {
    super(`Cannot take root of negative number: ${value}`);
    this.name = "NegativeRootError";
  }
}

// Operations list and sample inputs
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0; // sample values

function smartCalculate(operation, a, b) {
  let result;
  switch (operation) {
    case "add":
      result = a + b;
      break;
    case "subtract":
      result = a - b;
      break;
    case "divide":
      if (b === 0) throw new DivideByZeroError();
      result = a / b;
      break;
    case "power":
      result = Math.pow(a, b);
      break;
    case "root":
      if (a < 0) throw new NegativeRootError(a);
      result = Math.sqrt(a);
      break;
    default:
      throw new InvalidOperationError(operation);
  }
  return result;
}

// Try / catch with formatted summary
function runCalcAndReport(op) {
  try {
    const res = smartCalculate(op, num1, num2);
    // Format number reasonably (2 decimals for non-integer divisions)
    const formatted = (typeof res === "number" && !Number.isInteger(res)) ? res.toFixed(2) : res;
    console.log(`Operation: ${op}\nInputs: ${num1}, ${num2}\nResult: ${formatted}`);
  } catch (err) {
    console.log(`Operation: ${op}\nError: ${err.name} — ${err.message}`);
  }
}

// Example: loop through all operations to see behavior
for (let op of operations) {
  runCalcAndReport(op);
  console.log("---------------------------");
}
