// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Get the username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Simple validation (check if fields are empty)
    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      event.preventDefault();  // Prevent form submission
    }
  });
  