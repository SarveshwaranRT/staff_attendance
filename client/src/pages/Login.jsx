import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import './Login.css'; 

function LoginPage({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple authentication check (just for demo purposes)
    if (username === "admin" && password === "admin") {
      setIsAuthenticated(true); // Set the authenticated state to true
      navigate("/"); // Redirect to the home page ("/") after successful login
    } else if (username === "teacher" && password === "teacher") {
      setIsAuthenticated(true); // Set the authenticated state to true
      navigate("/"); // Redirect to the home page ("/") after successful login
    } else {
      alert("Invalid credentials!"); // Alert for incorrect login credentials
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>

      {/* Register Button */}
      <div>
        <button 
          onClick={() => navigate("/register")} // Navigate to the Register Page
          className="register-btn"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
