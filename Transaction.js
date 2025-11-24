"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let valid = [];
let invalid = [];

for (let t of transactions) {
    try {

        if (t === null) {
            throw new Error("Null transaction entry");
        }
        if (!t.id) {
            throw new Error("Missing transaction ID");
        }
        if (t.amount === undefined) {
            throw new Error("Missing transaction amount");
        }
        if (t.amount < 0) {
            throw new Error("Negative amount transaction");
        }

        // Passed → valid
        valid.push(t);

    } catch (err) {
        invalid.push({
            transaction: t,
            error: err.message
        });
    }
}

console.log("\nVALID Transactions:", valid);
console.log("INVALID Transactions:", invalid);

console.log(`\nSuccessful: ${valid.length}`);
console.log(`Failed: ${invalid.length}`);

// Use a breakpoint (in browser devtools) on this line to inspect arrays
let breakpointCheck = { valid, invalid };
