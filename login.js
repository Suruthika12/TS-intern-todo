document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value.trim();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      username === storedUser.username &&
      password === storedUser.password
    ) {
      //Login status
      localStorage.setItem("isLoggedIn", "true");

      alert("Login successful!");
      window.location.href = "tasks.html"; 
    } else {
      alert("Invalid username or password.");
    }
  });
});
