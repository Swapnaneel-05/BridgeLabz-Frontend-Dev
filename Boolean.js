let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = false;  // change to test output

// Logic for security
if (isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Test again with different values
isOwnerInside = true;
console.log("Rechecking...");

if (isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}
