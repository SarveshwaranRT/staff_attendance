import React, { useState } from 'react';
import './App.css'; // Import the CSS file

// Component for the Leave Request Form
const LeaveRequestForm = ({ onSubmit }) => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [substituteNeeded, setSubstituteNeeded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ leaveType, startDate, endDate, reason, substituteNeeded });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Leave Request Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Leave Type:
          <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)} required>
            <option value="">Select Leave Type</option>
            <option value="Sick">Sick Leave</option>
            <option value="Casual">Casual Leave</option>
            <option value="Annual">Annual Leave</option>
          </select>
        </label>
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </label>
        <label>
          Reason for Leave:
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </label>
        <label>
          Substitute Needed:
          <input
            type="checkbox"
            checked={substituteNeeded}
            onChange={(e) => setSubstituteNeeded(e.target.checked)}
          />
        </label>
        <button type="submit" className="submit-btn">Submit Leave Request</button>
      </form>
    </div>
  );
};

// Component for HOD Approval
const HODApproval = ({ leaveRequest, onApprove, onReject }) => {
  return (
    <div className="approval-container">
      <h3 className="approval-title">HOD Approval</h3>
      <div className="leave-info">
        <p><strong>Leave Type:</strong> {leaveRequest.leaveType}</p>
        <p><strong>Start Date:</strong> {leaveRequest.startDate}</p>
        <p><strong>End Date:</strong> {leaveRequest.endDate}</p>
        <p><strong>Reason:</strong> {leaveRequest.reason}</p>
        <p><strong>Substitute Needed:</strong> {leaveRequest.substituteNeeded ? 'Yes' : 'No'}</p>
      </div>
      <div className="approval-buttons">
        <button onClick={() => onApprove(leaveRequest)} className="approve-btn">Approve</button>
        <button onClick={() => onReject(leaveRequest)} className="reject-btn">Reject</button>
      </div>
    </div>
  );
};

// Main Home Page Component
const HomePage = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [pendingRequest, setPendingRequest] = useState(null);

  const handleLeaveRequestSubmit = (newRequest) => {
    setLeaveRequests([...leaveRequests, newRequest]);
    setPendingRequest(newRequest); // Set this request as pending for HOD approval
  };

  const handleApprove = (request) => {
    alert(`Leave approved for ${request.leaveType}`);
    setPendingRequest(null);
  };

  const handleReject = (request) => {
    alert(`Leave rejected for ${request.leaveType}`);
    setPendingRequest(null);
  };

  return (
    <div className="home-page" style={{ paddingTop: '60px' }}> {/* Adjust this padding as per NavBar height */}
      <h1 className="home-title">Teacher Leave Announcement Portal</h1>
      <LeaveRequestForm onSubmit={handleLeaveRequestSubmit} />
      
      {pendingRequest && (
        <HODApproval
          leaveRequest={pendingRequest}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      )}

      <h3 className="leave-requests-title">All Leave Requests:</h3>
      <ul className="leave-requests-list">
        {leaveRequests.map((request, index) => (
          <li key={index} className="leave-request-item">
            <strong>{request.leaveType}</strong> from {request.startDate} to {request.endDate} - {request.substituteNeeded ? 'Substitute Needed' : 'No Substitute'} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
