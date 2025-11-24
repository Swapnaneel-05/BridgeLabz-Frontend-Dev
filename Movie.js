document.getElementById("movieForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const seats = Number(document.getElementById("seats").value);
  
  let valid = true;

  // Name validation
  if (!/^[A-Za-z ]+$/.test(name)) {
    showError("name", "Name must contain alphabets only");
    valid = false;
  } else clearError("name");

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError("email", "Invalid email");
    valid = false;
  } else clearError("email");

  // Seat validation
  if (!(seats >= 1 && seats <= 10)) {
    showError("seat", "Seats must be between 1–10");
    valid = false;
  } else clearError("seat");

  if (valid) {
    const booking = { name, email, seats };
    document.getElementById("ticketOutput").innerHTML =
      `<h3>Ticket Confirmed</h3>
       Name: ${booking.name}<br>
       Email: ${booking.email}<br>
       Seats: ${booking.seats}`;
  }
});

function showError(id, msg) {
  document.getElementById(id).style.border = "2px solid red";
  document.getElementById(id + "Err").textContent = msg;
  document.getElementById(id + "Err").style.color = "red";
}

function clearError(id) {
  document.getElementById(id).style.border = "2px solid green";
  document.getElementById(id + "Err").textContent = "";
}
