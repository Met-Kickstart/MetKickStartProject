import React, { useState } from 'react';
import { FaFileExcel, FaLink, FaUpload, FaUsers, FaFilter, FaSearch, FaTimes } from 'react-icons/fa';
import * as XLSX from 'xlsx';
import './MockAptitude.css';

const MockAptitude = () => {
  const [tests, setTests] = useState([
    {
      id: 1,
      company: 'TCS',
      specialization: 'Finance',
      testLink: 'https://hackerrank.com/test/tcs-mock',
      totalStudents: 45,
      attempted: 40,
      status: 'Completed'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newTest, setNewTest] = useState({
    company: '',
    specialization: '',
    testLink: '',
    description: ''
  });
  const [selectedTest, setSelectedTest] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [testResults, setTestResults] = useState([]);

  // Handle file import for results
  const handleResultsImport = (e, testId) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const workbook = XLSX.read(evt.target.result, { type: 'binary' });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);

        const results = data.map(row => ({
          email: row['Email'] || row['Student Email'],
          name: row['Name'] || row['Student Name'],
          status: row['Status'] || 'Attended'
        }));

        // Update the test with results
        const updatedTests = tests.map(test => {
          if (test.id === testId) {
            return {
              ...test,
              totalStudents: data.length,
              attempted: data.length,
              status: 'Completed'
            };
          }
          return test;
        });

        localStorage.setItem(`testResults_${testId}`, JSON.stringify(results));
        setTests(updatedTests);
        setTestResults(results);
        setSelectedTest(tests.find(t => t.id === testId));
        setShowResults(true);
      };
      reader.readAsBinaryString(file);
    }
  };

  // Handle new test creation
  const handleCreateTest = (e) => {
    e.preventDefault();
    const test = {
      ...newTest,
      id: tests.length + 1,
      totalStudents: 0,
      attempted: 0,
      status: 'Scheduled'
    };
    setTests([...tests, test]);
    setShowForm(false);
    setNewTest({
      company: '',
      specialization: '',
      testLink: '',
      description: ''
    });
  };

  const closeResultsModal = () => {
    setShowResults(false);
    setSelectedTest(null);
    setTestResults([]);
  };

  // Add new function to handle row click
  const handleRowClick = (test) => {
    setSelectedTest(test);
    
    // Check if test results exist in local storage
    const storedResults = localStorage.getItem(`testResults_${test.id}`);
    if (storedResults) {
      setTestResults(JSON.parse(storedResults));
    } else {
      setTestResults([]); // Reset if no results found
    }
    
    setShowResults(true);
  };

  return (
    <div className="mock-aptitude">
      <div className="page-header">
        <h1><FaUsers /> Mock Aptitude Tests</h1>
        <button className="btn-primary" onClick={() => setShowForm(true)}>
          Create New Test
        </button>
      </div>

      {/* Test Creation Form */}
      {showForm && (
        <div className="test-form">
          <h3>Schedule New Mock Test</h3>
          <form onSubmit={handleCreateTest}>
            <div className="form-row">
              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  value={newTest.company}
                  onChange={(e) => setNewTest({...newTest, company: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>MBA Specialization</label>
                <select
                  value={newTest.specialization}
                  onChange={(e) => setNewTest({...newTest, specialization: e.target.value})}
                  required
                >
                  <option value="">Select Specialization</option>
                  <option value="Finance">Finance</option>
                  <option value="Marketing">Marketing</option>
                  <option value="HR">Human Resources</option>
                  <option value="Operations">Operations</option>
                  <option value="All">All Specializations</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Test Link</label>
              <input
                type="url"
                value={newTest.testLink}
                onChange={(e) => setNewTest({...newTest, testLink: e.target.value})}
                placeholder="https://"
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                value={newTest.description}
                onChange={(e) => setNewTest({...newTest, description: e.target.value})}
                placeholder="Test instructions and requirements..."
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-submit">Create Test</button>
              <button 
                type="button" 
                className="btn-cancel"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Modified Results Modal */}
      {showResults && selectedTest && (
        <div className="modal-overlay">
          <div className="results-modal">
            <div className="modal-header">
              <h2>{selectedTest.company} - Test Details</h2>
              <button className="close-btn" onClick={closeResultsModal}>
                <FaTimes />
              </button>
            </div>

            <div className="test-details">
              <div className="details-grid">
                <div className="detail-item">
                  <label>Company:</label>
                  <span>{selectedTest.company}</span>
                </div>
                <div className="detail-item">
                  <label>Specialization:</label>
                  <span>{selectedTest.specialization}</span>
                </div>
                <div className="detail-item">
                  <label>Test Link:</label>
                  <a href={selectedTest.testLink} target="_blank" rel="noopener noreferrer">
                    <FaLink /> Open Test
                  </a>
                </div>
                <div className="detail-item">
                  <label>Description:</label>
                  <span>{selectedTest.description}</span>
                </div>
              </div>

              <div className="results-summary">
                <div className="summary-card">
                  <h3>Total Students</h3>
                  <p>{selectedTest.totalStudents || 0}</p>
                </div>
                <div className="summary-card">
                  <h3>Attempted</h3>
                  <p>{selectedTest.attempted || 0}</p>
                </div>
              </div>

              <div className="upload-section">
                <h3>Upload Results</h3>
                <div className="upload-area">
                  <label className="file-upload-label">
                    <FaFileExcel />
                    <span>Import Excel File</span>
                    <input
                      type="file"
                      accept=".xlsx,.xls"
                      onChange={(e) => handleResultsImport(e, selectedTest.id)}
                      style={{ display: 'none' }}
                    />
                  </label>
                  <small>Excel file should contain columns: Name, Email</small>
                </div>
              </div>

              {testResults.length > 0 && (
                <div className="results-table">
                  <h3>Student Results</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {testResults.map((result, index) => (
                        <tr key={index}>
                          <td>{result.name}</td>
                          <td>{result.email}</td>
                          <td>
                            <span className="status-badge attended">
                              {result.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modify the table row to be clickable */}
      <div className="tests-table">
        <div className="table-actions">
          <div className="search-box">
            <FaSearch />
            <input
              type="text"
              placeholder="Search tests..."
            />
          </div>
          <div className="filter-box">
            <FaFilter />
            <select defaultValue="all">
              <option value="all">All Tests</option>
              <option value="scheduled">Scheduled</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Specialization</th>
              <th>Test Link</th>
              <th>Students</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tests.map(test => (
              <tr 
                key={test.id} 
                onClick={() => handleRowClick(test)}
                className="clickable-row"
              >
                <td>{test.company}</td>
                <td>{test.specialization}</td>
                <td>
                  <a href={test.testLink} target="_blank" rel="noopener noreferrer">
                    <FaLink /> Open Link
                  </a>
                </td>
                <td>{test.attempted}/{test.totalStudents}</td>
                <td>
                  <span className={`status-badge ${test.status.toLowerCase()}`}>
                    {test.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <label className="upload-btn" title="Upload Results">
                      <FaUpload />
                      <input
                        type="file"
                        accept=".xlsx,.xls"
                        onChange={(e) => handleResultsImport(e, test.id)}
                        style={{ display: 'none' }}
                      />
                    </label>
                    <button className="view-btn" title="View Details">
                      <FaUsers />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MockAptitude;