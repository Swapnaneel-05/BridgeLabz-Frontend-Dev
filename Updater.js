let user = { 
  name: "John", 
  email: "john@mail.com", 
  age: 21 
};

// Pre-fill form values
document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;
document.getElementById("age").value = user.age;

function displayUser() {
  document.getElementById("output").textContent = JSON.stringify(user, null, 2);
}

displayUser();

// Update object on submit
document.getElementById("userForm").addEventListener("submit", function(e) {
  e.preventDefault();

  user.name = document.getElementById("name").value;
  user.email = document.getElementById("email").value;
  user.age = Number(document.getElementById("age").value);

  displayUser();
});
