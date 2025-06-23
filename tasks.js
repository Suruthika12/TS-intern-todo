document.addEventListener("DOMContentLoaded", function () {
  
  function showMessage(message, duration = 1000) {
  const box = document.getElementById("messageBox");
  box.innerText = message;
  box.style.display = "block";

  setTimeout(() => {
    box.style.display = "none";
  }, duration); 
}
  
  
  if (localStorage.getItem("isLoggedIn") !== "true") {
    alert("Please log in first.");
    window.location.href = "login.html";
    return;
  }

  
  const taskForm = document.getElementById("taskForm");

  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskInput = document.getElementById("taskInput").value.trim();
    if (taskInput === "") {
      alert("Task cannot be empty.");
      return;
    }

    
    const newTask = {
      id: Date.now(),
      title: taskInput
    };

    
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));

   
    document.getElementById("taskInput").value = "";
    showMessage("Task added successfully!");
    // window.location.href = "list.html";
  });

    
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("isLoggedIn");
        alert("Logged out successfully.");
        window.location.href = "login.html"; 
    });
    }

    
    const yourTasksBtn = document.getElementById("yourTasksBtn");
    if (yourTasksBtn) {
      yourTasksBtn.addEventListener("click", function (e) {
      e.preventDefault(); 
        window.location.href = "list.html";
      });
    }
});






