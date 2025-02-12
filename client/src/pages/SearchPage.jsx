import React, { useState } from 'react';
import './SearchPage.css'; // Import the CSS file

// Mock ECE department teacher data
const teachers = [
  { id: 1, name: 'Dr. John Doe', subject: 'Digital Circuits', department: 'ECE' },
  { id: 2, name: 'Prof. Jane Smith', subject: 'Microprocessors', department: 'ECE' },
  { id: 3, name: 'Dr. Michael Brown', subject: 'Control Systems', department: 'ECE' },
  { id: 4, name: 'Dr. Sarah Johnson', subject: 'Communication Systems', department: 'ECE' },
  { id: 5, name: 'Prof. Emily Davis', subject: 'VLSI Design', department: 'ECE' },
  { id: 6, name: 'Dr. David Clark', subject: 'Signal Processing', department: 'ECE' },
];

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTeachers, setFilteredTeachers] = useState(teachers);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = teachers.filter((teacher) =>
      teacher.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredTeachers(filtered);
  };

  return (
    <div className="search-page">
      <h1 className="page-title">ECE Department Teacher Profiles</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a teacher or subject..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {filteredTeachers.length > 0 ? (
        <div className="teacher-list">
          {filteredTeachers.map((teacher) => (
            <div className="teacher-card" key={teacher.id}>
              <h3 className="teacher-name">{teacher.name}</h3>
              <p className="teacher-subject"><strong>Subject:</strong> {teacher.subject}</p>
              <p className="teacher-department"><strong>Department:</strong> {teacher.department}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results">No teachers found.</p>
      )}
    </div>
  );
};

export default SearchPage;
