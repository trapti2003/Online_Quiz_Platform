function register() {
  let email = regEmail.value;
  let pass = regPass.value;

  if (email === "" || pass === "") {
    alert("All fields required");
    return;
  }

  localStorage.setItem(email, pass);
  alert("Registration Successful!");
}

function login() {
  let email = loginEmail.value;
  let pass = loginPass.value;

  if (localStorage.getItem(email) === pass) {
    localStorage.setItem("currentUser", email);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Login");
  }
}
