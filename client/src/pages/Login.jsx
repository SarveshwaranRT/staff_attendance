import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Ensure you import useNavigate correctly
import './Login.css'; // Your styling file for login

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // This is essential for navigation

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
          onClick={() => navigate("/register")} // Navigate to the register page
          style={styles.registerBtn}  // Inline styles for Register button
          className="register-btn"
        >
          Register
        </button>
      </div>
    </div>
  );
}

// Inline styles for the Register Button
const styles = {
  registerBtn: {
    display: 'inline-block',
    backgroundColor: '#4CAF50',  // Green background color
    color: 'white',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',  // Rounded corners
    cursor: 'pointer',
    marginTop: '15px',  // Space between Login and Register button
    transition: 'all 0.3s ease',  // Smooth transition for hover effect
    textAlign: 'center',
    width: '100%',  // Make it full width on small screens
  },
};

export default Login;
