let currentSalary = 40000;
let incrementRate = 10; // percentage

let projection = [];

for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * (incrementRate / 100); // apply increment
    let roundedSalary = Math.round(currentSalary);

    projection.push({
        Year: year,
        Salary: roundedSalary
    });
}

console.table(projection);
