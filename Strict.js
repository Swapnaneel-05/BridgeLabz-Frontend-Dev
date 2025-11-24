"use strict";

function demo(a, b) {
  // declare variables explicitly
  let total = 10;
  // cannot delete declared bindings; if you need a removable property, use an object:
  const store = { total };
  delete store.total; // allowed — deletes property of object
  console.log("a:", a, "b:", b, "store:", store);
}

demo(5, 10);
