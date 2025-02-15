import React, { useState } from 'react';

const AdminForm = () => {
  const [adminData, setAdminData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server)
    console.log("Admin Data Submitted:", adminData);
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h2>Admin Registration</h2>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={adminData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={adminData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={adminData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Confirm Password: </label>
        <input
          type="password"
          name="confirmPassword"
          value={adminData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default AdminForm;
