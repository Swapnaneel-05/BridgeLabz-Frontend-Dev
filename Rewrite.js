class Person {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log("Name:", this.name);
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name);        // calls parent constructor
    this.branch = branch;
  }

  showBranch() {
    console.log("Branch:", this.branch);
  }
}

// Demo
const st = new Student("Amit", "CSE");

st.showName();    // from Person
st.showBranch();  // from Student
