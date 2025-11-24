"use strict";

function showMessage() {
  let greeting = "Welcome";
  console.log(greeting);
}

// Call
showMessage();


let debugWatch = { lastGreeting: "not set" };
function showMessageWithWatch() {
  debugWatch.lastGreeting = "Welcome"; // set for inspector
  console.log(debugWatch.lastGreeting);
}
showMessageWithWatch();
