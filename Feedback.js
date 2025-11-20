let feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words
let wordCount = feedback.split(" ").length;

// Check if feedback contains negative words
let hasNegative = feedback.toLowerCase().includes("bad") ||
                  feedback.toLowerCase().includes("poor");

if (!hasNegative) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}

console.log("Word Count:", wordCount);
