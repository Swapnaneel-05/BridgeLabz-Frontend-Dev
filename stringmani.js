let product = " wireless headphones PRO ";

// Step 1: Trim and convert to lowercase
let cleaned = product.trim().toLowerCase();

// Step 2: Capitalize first letter of each word
cleaned = cleaned
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

// Step 3: Replace "Pro" with "Pro Edition"
cleaned = cleaned.replace("Pro", "Pro Edition");

// Output cleaned title and its length
console.log("Cleaned Title:", cleaned);
console.log("Length:", cleaned.length);
