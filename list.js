// document.addEventListener("DOMContentLoaded", function () {
//   // 🔐 Step 1: Check login status
//   if (localStorage.getItem("isLoggedIn") !== "true") {
//     alert("Please log in first.");
//     window.location.href = "login.html";
//     return;
//   }

//   // 📋 Step 2: Load and display tasks
//   function renderTasks() {
//     const taskList = document.getElementById("taskList");
//     taskList.innerHTML = ""; // Clear existing list

//     const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//     if (tasks.length === 0) {
//       taskList.innerHTML = "<li>No tasks available</li>";
//       return;
//     }

//     tasks.forEach(task => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         ${task.title}
//         <button onclick="deleteTask(${task.id})">Delete</button>
//       `;
//       taskList.appendChild(li);
//     });
//   }


//   // ❌ Step 3: Delete task by ID
//   window.deleteTask = function (id) {
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     tasks = tasks.filter(task => task.id !== id);
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     renderTasks(); // Re-render updated list
//   };

//   // 🔁 Back button logic
//     const backBtn = document.getElementById("backBtn");
//     if (backBtn) {
//     backBtn.addEventListener("click", function () {
//         window.location.href = "tasks.html";
//     });
//    }

//   // 🚪 Step 4: Logout logic (optional)
//   const logoutBtn = document.getElementById("logoutBtn");
//   if (logoutBtn) {
//     logoutBtn.addEventListener("click", function () {
//       localStorage.removeItem("isLoggedIn");
//       alert("Logged out successfully.");
//       window.location.href = "login.html";
//     });
//   }

// });


document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.getElementById("taskList");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Render all tasks
  function renderTasks() {
    taskList.innerHTML = ""; // Clear existing tasks

    tasks.forEach((task, index) => {
      const li = document.createElement("li");

      const taskText = document.createElement("span");
      taskText.className = "task-title";
      taskText.innerText = task.title;

      const delBtn = document.createElement("button");
      delBtn.innerText = "Delete";
      delBtn.addEventListener("click", function () {
        deleteTask(index);
      });

      li.appendChild(taskText);
      li.appendChild(delBtn);
      taskList.appendChild(li);
    });
  }

  // Delete task by index
  function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks(); // Refresh the task list
  }

  // Back button to Add Task page
  const backBtn = document.getElementById("backBtn");
  if (backBtn) {
    backBtn.addEventListener("click", function () {
      window.location.href = "tasks.html";
    });
  }

  // Logout button
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.setItem("isLoggedIn", "false");
      window.location.href = "login.html";
    });
  }

  // Initial call to render
  renderTasks();
});

