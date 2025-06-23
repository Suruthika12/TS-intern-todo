
document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const username = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      alert("Please fill in both fields.");
      return;
    }

    //LocalStorage 
    const user = {
      username: username,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful! Please log in.");
    window.location.href = "login.html"; 
  });
});
