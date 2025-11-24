"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let value of apiData) {

    let num = Number(value);        // numeric conversion
    let bool = Boolean(value);      // boolean conversion
    let str = String(value);        // string conversion

    console.log(`Value: ${value} → Number: ${num}, Boolean: ${bool}, String: "${str}"`);

    // Check invalid numbers
    if (isNaN(num)) {
        invalidNumbers.push(value);
    } else {
        validNumbers.push(num);
    }
}

console.log("\nValid Numeric Data:", validNumbers);
console.log("Invalid Numeric Data:", invalidNumbers);
