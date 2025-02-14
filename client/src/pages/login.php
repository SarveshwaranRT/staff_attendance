<?php
// login.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Sample username and password
  $correct_username = "user123";
  $correct_password = "password123";

  $username = $_POST['username'];
  $password = $_POST['password'];

  // Check if the username and password are correct
  if ($username === $correct_username && $password === $correct_password) {
    echo "Login successful!";
    // Redirect to another page, or start a session
  } else {
    echo "Invalid username or password.";
  }
}
?>
