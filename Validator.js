document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  validateField("name", /^[A-Za-z ]+$/, "Name must contain only alphabets.");
  validateField("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format.");
  validateField("phone", /^[0-9]{10}$/, "Phone must be 10 digits.");
  validateField("password", /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{6,}$/, 
    "Password must contain 1 uppercase, 1 number, 1 special character."
  );
});

function validateField(id, regex, message) {
  const field = document.getElementById(id);
  const errorSpan = document.getElementById(id + "Err");

  if (!regex.test(field.value)) {
    field.style.border = "2px solid red";
    errorSpan.textContent = message;
    errorSpan.style.color = "red";
    return false;
  } else {
    field.style.border = "2px solid green";
    errorSpan.textContent = "";
    return true;
  }
}
