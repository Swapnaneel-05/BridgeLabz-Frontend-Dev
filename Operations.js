function applyOperation(numbers, operation) {
  return numbers.map(operation);
}

const nums = [1,2,3,4];

// Double
const doubled = applyOperation(nums, n => n * 2);
console.log("Doubled:", doubled);

// Square
const squared = applyOperation(nums, n => n * n);
console.log("Squared:", squared);
