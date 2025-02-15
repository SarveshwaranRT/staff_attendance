import React, { useState } from 'react';

const TeacherForm = () => {
  const [teacherData, setTeacherData] = useState({
    name: '',
    email: '',
    subject: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData({ ...teacherData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server)
    console.log("Teacher Data Submitted:", teacherData);
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h2>Teacher Registration</h2>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={teacherData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={teacherData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Subject: </label>
        <input
          type="text"
          name="subject"
          value={teacherData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={teacherData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Confirm Password: </label>
        <input
          type="password"
          name="confirmPassword"
          value={teacherData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default TeacherForm;
