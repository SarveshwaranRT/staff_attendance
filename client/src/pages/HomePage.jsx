import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [teacherName, setTeacherName] = useState('John Doe');
  const [leaveStatus, setLeaveStatus] = useState('Pending');
  const [substitutionStatus, setSubstitutionStatus] = useState('Assigned');
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [substitutes, setSubstitutes] = useState([]);

  // Mock data for leave requests and substitution
  useEffect(() => {
    // Simulate fetching leave and substitution data
    setLeaveRequests([
      { id: 1, type: 'Sick Leave', startDate: '2025-02-15', endDate: '2025-02-17', status: 'Pending' },
      { id: 2, type: 'Personal Leave', startDate: '2025-02-20', endDate: '2025-02-22', status: 'Approved' }
    ]);
    
    setSubstitutes([
      { id: 1, name: 'Jane Smith', assignedDate: '2025-02-15', status: 'Assigned' },
      { id: 2, name: 'Mark Johnson', assignedDate: '2025-02-20', status: 'Pending' }
    ]);
  }, []);

  return (
    <div className="dashboard">
      <h1>Welcome, {teacherName}!</h1>
      
      <div className="status-overview">
        <div className="status-item">
          <h3>Leave Status</h3>
          <p>{leaveStatus}</p>
        </div>
        
        <div className="status-item">
          <h3>Substitution Status</h3>
          <p>{substitutionStatus}</p>
        </div>
      </div>

      <div className="leave-requests">
        <h2>Leave Requests</h2>
        <table>
          <thead>
            <tr>
              <th>Leave Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.type}</td>
                <td>{request.startDate}</td>
                <td>{request.endDate}</td>
                <td>{request.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="substitution-requests">
        <h2>Substitution Assignments</h2>
        <table>
          <thead>
            <tr>
              <th>Substitute Name</th>
              <th>Assigned Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {substitutes.map((substitute) => (
              <tr key={substitute.id}>
                <td>{substitute.name}</td>
                <td>{substitute.assignedDate}</td>
                <td>{substitute.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="action-buttons">
        <button onClick={() => alert('Submit Leave Request')}>Submit Leave Request</button>
        <button onClick={() => alert('Request Substitute')}>Request Substitute</button>
      </div>
    </div>
  );
};

export default Dashboard;
