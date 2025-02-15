import React, { useState } from 'react';
import AdminForm from './AdminForm';
import TeacherForm from './TeacherForm';
import './RegistrationPage.css'; // For styling

const RegistrationPage = () => {
  const [userType, setUserType] = useState(''); // Store the selected user type

  const handleSelectionChange = (type) => {
    setUserType(type);
  };

  return (
    <div className="registration-container">
      <h1>Registration Page</h1>
      
      {/* User Type Selection */}
      <div className="user-selection">
        <button 
          onClick={() => handleSelectionChange('admin')}
          className="selection-btn"
        >
          Register as Admin
        </button>
        <button 
          onClick={() => handleSelectionChange('teacher')}
          className="selection-btn"
        >
          Register as Teacher
        </button>
      </div>

      {/* Render corresponding form based on user type */}
      {userType === 'admin' && <AdminForm />}
      {userType === 'teacher' && <TeacherForm />}

      {/* Optional: Button to clear user type selection */}
      {userType && (
        <button
          onClick={() => setUserType('')}
          className="clear-selection-btn"
        >
          Change User Type
        </button>
      )}
    </div>
  );
};

export default RegistrationPage;
