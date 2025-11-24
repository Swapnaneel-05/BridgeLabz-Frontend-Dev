"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

rawData.forEach((entry, index) => {
  const line = index + 1;
  try {
    // Parse: may throw
    const obj = JSON.parse(entry);

    // Validate presence of keys
    if (!obj.hasOwnProperty("user") || !obj.hasOwnProperty("age")) {
      throw new Error(`Missing key(s) in JSON (require user & age)`);
    }

    // Convert age to Number and validate
    const ageNum = Number(obj.age);
    if (Number.isNaN(ageNum)) {
      throw new Error(`Invalid age value: ${obj.age}`);
    }

    // Build clean entry
    clean.push({
      ...obj,
      age: ageNum
    });
  } catch (err) {
    errors.push({
      line,
      raw: entry,
      message: err.message
    });
  }
});

// Bonus: filter under-18 users
const adults = clean.filter(u => u.age >= 18);
const minors = clean.filter(u => u.age < 18);

// Reports
console.log("Clean entries:", clean);
console.log("Adults (>=18):", adults);
console.log("Minors (<18):", minors);
console.log("Errors (with line numbers):", errors);
