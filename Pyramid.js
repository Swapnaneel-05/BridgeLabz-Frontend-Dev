"use strict";

function generatePyramidFromInput(userLimit) {
  const limit = Number(userLimit) || 5; // default 5 if invalid
  for (let i = 1; i <= limit; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row.trim());
  }
}

generatePyramidFromInput(6);
