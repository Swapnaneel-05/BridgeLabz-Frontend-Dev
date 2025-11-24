document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  let valid = true;

  // Username: at least 5 chars
  if (!/^.{5,}$/.test(username)) {
    showErr("userErr", "Username must be at least 5 characters");
    valid = false;
  } else clearErr("userErr");

  // Password: must include uppercase, lowercase, number, special char
  const passReg =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

  if (!passReg.test(password)) {
    showErr("passErr", 
      "Password must contain uppercase, lowercase, number, special character"
    );
    valid = false;
  } else clearErr("passErr");

  if (valid) {
    document.getElementById("loginMessage").innerHTML =
      `<h3 style="color:green">Login Successful!</h3>`;
  }
});

function showErr(id, msg) {
  const span = document.getElementById(id);
  span.textContent = msg;
  span.style.color = "red";
}

function clearErr(id) {
  document.getElementById(id).textContent = "";
}
