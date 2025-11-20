const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

for (let dept of departments) {
    let name = dept[0];
    let score = dept[1];

    console.log(`Department: ${name}, Score: ${score}`);

    if (score >= 90) {
        console.log("Performance: Excellent");
    }
    else if (score >= 75) {
        console.log("Performance: Good");
    }
    else if (score >= 60) {
        console.log("Performance: Average");
    }
    else {
        console.log("Performance: Needs Improvement");
    }

    console.log("-------------------------");
}
