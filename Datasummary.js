// Declare variables of different data types
let userName = "Swapnaneel";      // string
let age = 21;                     // number
let isLoggedIn = true;            // boolean
let hobbies = ["coding", "music"]; // array
let userDetails = { city: "Kolkata", branch: "CSE" }; // object
let score = null;                 // null
let pendingTask;                  // undefined

// Identify types
let summary = [
  {
    label: "userName",
    value: userName,
    type: typeof userName
  },
  {
    label: "age",
    value: age,
    type: typeof age
  },
  {
    label: "isLoggedIn",
    value: isLoggedIn,
    type: typeof isLoggedIn
  },
  {
    label: "hobbies",
    value: hobbies,
    type: Array.isArray(hobbies) ? "array" : typeof hobbies
  },
  {
    label: "userDetails",
    value: userDetails,
    type: typeof userDetails
  },
  {
    label: "score",
    value: score,
    type: typeof score // note: JS returns "object" for null
  },
  {
    label: "pendingTask",
    value: pendingTask,
    type: typeof pendingTask
  }
];

// Print formatted report
console.table(summary);
