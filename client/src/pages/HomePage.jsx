import React, { useState } from 'react';

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
    <div style={styles.formContainer}>
      <h2 style={styles.formTitle}>Leave Request Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Leave Type:
          <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)} required style={styles.input}>
            <option value="">Select Leave Type</option>
            <option value="Sick">Sick Leave</option>
            <option value="Casual">Casual Leave</option>
            <option value="Annual">Annual Leave</option>
          </select>
        </label>
        <label style={styles.label}>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Reason for Leave:
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Substitute Needed:
          <input
            type="checkbox"
            checked={substituteNeeded}
            onChange={(e) => setSubstituteNeeded(e.target.checked)}
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.submitBtn}>Submit Leave Request</button>
      </form>
    </div>
  );
};

const HODApproval = ({ leaveRequest, onApprove, onReject }) => {
  return (
    <div style={styles.approvalContainer}>
      <h3 style={styles.approvalTitle}>HOD Approval</h3>
      <div style={styles.leaveInfo}>
        <p><strong>Leave Type:</strong> {leaveRequest.leaveType}</p>
        <p><strong>Start Date:</strong> {leaveRequest.startDate}</p>
        <p><strong>End Date:</strong> {leaveRequest.endDate}</p>
        <p><strong>Reason:</strong> {leaveRequest.reason}</p>
        <p><strong>Substitute Needed:</strong> {leaveRequest.substituteNeeded ? 'Yes' : 'No'}</p>
      </div>
      <div style={styles.approvalButtons}>
        <button onClick={() => onApprove(leaveRequest)} style={styles.approveBtn}>Approve</button>
        <button onClick={() => onReject(leaveRequest)} style={styles.rejectBtn}>Reject</button>
      </div>
    </div>
  );
};

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
    <div style={styles.homePage}>
      <h1 style={styles.homeTitle}>Teacher Leave Announcement Portal</h1>
      <LeaveRequestForm onSubmit={handleLeaveRequestSubmit} />
      
      {pendingRequest && (
        <HODApproval
          leaveRequest={pendingRequest}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      )}

      <h3 style={styles.leaveRequestsTitle}>All Leave Requests:</h3>
      <ul style={styles.leaveRequestsList}>
        {leaveRequests.map((request, index) => (
          <li key={index} style={styles.leaveRequestItem}>
            <strong>{request.leaveType}</strong> from {request.startDate} to {request.endDate} - {request.substituteNeeded ? 'Substitute Needed' : 'No Substitute'} 
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline styles for responsiveness
const styles = {
  homePage: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '100%',
  },
  homeTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '20px',
  },
  formContainer: {
    width: '100%',
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  formTitle: {
    textAlign: 'center',
    fontSize: '1.8rem',
    marginBottom: '15px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    fontSize: '1.1rem',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    fontSize: '1rem',
    width: '100%',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  submitBtn: {
    padding: '10px',
    fontSize: '1.2rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  submitBtnHover: {
    backgroundColor: '#0056b3',
  },
  leaveRequestsList: {
    listStyleType: 'none',
    padding: '0',
    marginTop: '20px',
  },
  leaveRequestItem: {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  leaveRequestsTitle: {
    fontSize: '1.5rem',
    marginTop: '30px',
    textAlign: 'center',
  },
  approvalContainer: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#f1f1f1',
    borderRadius: '8px',
  },
  approvalTitle: {
    fontSize: '1.6rem',
    marginBottom: '20px',
    textAlign: 'center',
  },
  leaveInfo: {
    marginBottom: '20px',
  },
  approvalButtons: {
    textAlign: 'center',
  },
  approveBtn: {
    padding: '10px 20px',
    fontSize: '1rem',
    margin: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#28a745',
    color: 'white',
  },
  rejectBtn: {
    padding: '10px 20px',
    fontSize: '1rem',
    margin: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#dc3545',
    color: 'white',
  },
  
  // Media Queries for smaller screen sizes
  '@media (max-width: 600px)': {
    homeTitle: {
      fontSize: '1.8rem',  // smaller font size on mobile
    },
    formContainer: {
      width: '90%',  // use more width on smaller screens
      padding: '15px',
    },
    formTitle: {
      fontSize: '1.5rem',
    },
    input: {
      fontSize: '0.9rem',  // smaller input font size
    },
    submitBtn: {
      fontSize: '1rem',  // smaller button font size
    },
    leaveRequestsTitle: {
      fontSize: '1.2rem',
    },
    leaveRequestItem: {
      fontSize: '0.9rem',
    },
    approvalTitle: {
      fontSize: '1.4rem',
    },
  }
};

export default HomePage;
