import React, { useState } from 'react';
import AdminForm from './AdminForm';
import TeacherForm from './TeacherForm';
import './RegistrationPage.css'; // For styling

const RegistrationPage = () => {
  const [userType, setUserType] = useState(''); // Store the selected user type

  return (
    <div className="registration-container">
      <h1>Registration Page</h1>
      
      <div className="user-selection">
        <button onClick={() => setUserType('admin')}>Register as Admin</button>
        <button onClick={() => setUserType('teacher')}>Register as Teacher</button>
      </div>

      {userType === 'admin' && <AdminForm />}
      {userType === 'teacher' && <TeacherForm />}

      {/* Optional registration info or additional links */}
      <div className="register-info">
        <p>Already have an account? <a href="/login">Login here</a></p>
      </div>
    </div>
  );
};

export default RegistrationPage;
