class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // monthly
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += this.salary * (percent / 100);
  }
}

// Create employees
const employees = [
  new Employee(1, "Amit", "Tech", 40000),
  new Employee(2, "Sara", "HR", 30000),
  new Employee(3, "Rohan", "Finance", 45000),
  new Employee(4, "Meera", "Tech", 50000),
  new Employee(5, "Kabir", "Support", 28000),
];

// Apply bonus to Tech department only
employees
  .filter(e => e.department === "Tech")
  .forEach(e => e.applyBonus(10));

// Annual payout
const totalPayout = employees
  .reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);

console.log("Employees:");
employees.forEach(e => console.log(`${e.name} → ₹${e.getAnnualSalary()}`));

console.log("Total Annual Company Payout:", totalPayout);
