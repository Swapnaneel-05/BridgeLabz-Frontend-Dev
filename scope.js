// Global variable
let bonus = 5000;  

function calculateSalary(isPermanent) {

    // Local variable
    let salary = 40000;  

    // Local total salary calculation
    let totalSalary;

    if (isPermanent === true) {
        totalSalary = salary + bonus;   // uses global bonus
    } else {
        totalSalary = salary;           // no bonus added
    }

    console.log(`Is Permanent: ${isPermanent}`);
    console.log(`Total Salary: ${totalSalary}`);
}

// Function calls to demonstrate scope behavior
calculateSalary(true);   // employee gets bonus
calculateSalary(false);  // employee does not get bonus

// Showing that global 'bonus' remains unchanged
console.log("Global Bonus (unchanged):", bonus);
