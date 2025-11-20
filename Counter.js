let count = 0;

function increment() {
    count++;
    console.log("Count:", count);

    // Nested function to show scope
    function showUpdate() {
        console.log("Nested Update → Current Count:", count);
    }
    showUpdate();
}

function decrement() {
    count--;
    console.log("Count:", count);

    // Nested function for scope demonstration
    function showUpdate() {
        console.log("Nested Update → Current Count:", count);
    }
    showUpdate();
}

// Simulating "click" events
increment();
increment();
decrement();
increment();
