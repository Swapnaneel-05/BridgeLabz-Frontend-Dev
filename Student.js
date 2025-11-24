// Parent constructor
function Person(name) {
  this.name = name;
}

// Child constructor
function Student(name, branch) {
  Person.call(this, name); // inherit properties
  this.branch = branch;
}

// Inherit prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Add methods
Person.prototype.showName = function() {
  console.log("Name:", this.name);
};

Student.prototype.showBranch = function() {
  console.log("Branch:", this.branch);
};

// Demonstration
const s1 = new Student("RAj", "CSE");

s1.showName();     // from Person prototype
s1.showBranch();   // from Student prototype

console.log(s1 instanceof Student); // true
console.log(s1 instanceof Person);  // true -> prototype chain works
