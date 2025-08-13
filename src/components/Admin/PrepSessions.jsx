import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaCalendarAlt, FaLink, FaTimes, FaFileExcel } from 'react-icons/fa';
import * as XLSX from 'xlsx';
import './PrepSessions.css';

const PrepSessions = () => {
  const [sessions, setSessions] = useState([
    {
      id: 1,
      title: "Interview Skills Workshop",
      company: "TCS",
      specialization: "Finance",
      date: "2024-02-20",
      time: "14:00",
      duration: "2 hours",
      faculty: "Mr. John Smith",
      mode: "Offline",
      venue: "Seminar Hall 1",
      link: "",
      description: "Hands-on workshop focusing on technical interview preparation",
      totalStudents: 45,
      attendedStudents: 40,
      status: "Completed"
    }
  ]);

  const [newSession, setNewSession] = useState({
    title: "",
    company: "",
    specialization: "",
    date: "",
    time: "",
    duration: "",
    faculty: "",
    mode: "Offline",
    venue: "",
    link: "",
    description: ""
  });

  const [showForm, setShowForm] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [sessionAttendance, setSessionAttendance] = useState([]);

  const handleAddSession = (e) => {
    e.preventDefault();
    setSessions([...sessions, { 
      ...newSession, 
      id: sessions.length + 1, 
      status: "Scheduled",
      totalStudents: 0,
      attendedStudents: 0
    }]);
    setNewSession({
      title: "",
      company: "",
      specialization: "",
      date: "",
      time: "",
      duration: "",
      faculty: "",
      mode: "Offline",
      venue: "",
      link: "",
      description: ""
    });
    setShowForm(false); // Hide form after submission
  };

  const handleDeleteSession = (id) => {
    setSessions(sessions.filter(session => session.id !== id));
  };

  const handleRowClick = (session) => {
    setSelectedSession(session);
    const storedAttendance = localStorage.getItem(`sessionAttendance_${session.id}`);
    if (storedAttendance) {
      setSessionAttendance(JSON.parse(storedAttendance));
    } else {
      setSessionAttendance([]);
    }
    setShowModal(true);
  };

  const handleAttendanceImport = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const workbook = XLSX.read(evt.target.result, { type: 'binary' });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);

        const attendance = data.map(row => ({
          email: row['Email'] || row['Student Email'],
          name: row['Name'] || row['Student Name'],
          status: 'Attended'
        }));

        // Update the session with attendance
        const updatedSessions = sessions.map(session => {
          if (session.id === selectedSession.id) {
            return {
              ...session,
              totalStudents: data.length,
              attendedStudents: data.length,
              status: 'Completed'
            };
          }
          return session;
        });

        localStorage.setItem(`sessionAttendance_${selectedSession.id}`, JSON.stringify(attendance));
        setSessions(updatedSessions);
        setSessionAttendance(attendance);
      };
      reader.readAsBinaryString(file);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedSession(null);
    setSessionAttendance([]);
  };

  const getStatusBadge = (status) => {
    const statusClass = status === 'Completed' ? 'completed' : 'scheduled';
    return <span className={`status-badge ${statusClass}`}>{status}</span>;
  };

  return (
    <div className="prep-sessions">
      {/* Page Header */}
      <div className="sessions-header">
        <h1>
          <FaCalendarAlt />
          Preparation Sessions
        </h1>
        <button 
          className="add-session-btn"
          onClick={() => setShowForm(!showForm)}
        >
          <FaPlus />
          {showForm ? 'Cancel' : 'Add New Session'}
        </button>
      </div>

      {/* Conditional Form Display */}
      {showForm && (
        <div className="session-form">
          <h3>Create New Preparation Session</h3>
          <form onSubmit={handleAddSession}>
            <div className="form-row">
              <div className="form-group">
                <label>Session Title</label>
                <input
                  type="text"
                  value={newSession.title}
                  onChange={(e) => setNewSession({...newSession, title: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  value={newSession.company}
                  onChange={(e) => setNewSession({...newSession, company: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>MBA Specialization</label>
                <select
                  value={newSession.specialization}
                  onChange={(e) => setNewSession({...newSession, specialization: e.target.value})}
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

            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  value={newSession.date}
                  onChange={(e) => setNewSession({...newSession, date: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Time</label>
                <input
                  type="time"
                  value={newSession.time}
                  onChange={(e) => setNewSession({...newSession, time: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Duration</label>
                <input
                  type="text"
                  placeholder="e.g., 2 hours"
                  value={newSession.duration}
                  onChange={(e) => setNewSession({...newSession, duration: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Faculty Name/Trainer</label>
                <input
                  type="text"
                  value={newSession.faculty}
                  onChange={(e) => setNewSession({...newSession, faculty: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Mode</label>
                <select
                  value={newSession.mode}
                  onChange={(e) => setNewSession({...newSession, mode: e.target.value})}
                  required
                >
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
              </div>
              <div className="form-group">
                {newSession.mode === 'Online' ? (
                  <>
                    <label>Meeting Link</label>
                    <input
                      type="url"
                      placeholder="https://"
                      value={newSession.link}
                      onChange={(e) => setNewSession({...newSession, link: e.target.value})}
                      required
                    />
                  </>
                ) : (
                  <>
                    <label>Venue</label>
                    <input
                      type="text"
                      value={newSession.venue}
                      onChange={(e) => setNewSession({...newSession, venue: e.target.value})}
                      required
                    />
                  </>
                )}
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                value={newSession.description}
                onChange={(e) => setNewSession({...newSession, description: e.target.value})}
                placeholder="Brief description of the session"
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Create Session
              </button>
              <button 
                type="button" 
                className="cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Sessions Table */}
      <div className="sessions-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Company</th>
              <th>Specialization</th>
              <th>Date & Time</th>
              <th>Duration</th>
              <th>Faculty</th>
              <th>Mode</th>
              <th>Venue/Link</th>
              <th>Attendance</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr 
                key={session.id}
                onClick={() => handleRowClick(session)}
                className="clickable-row"
              >
                <td><strong>{session.title}</strong></td>
                <td>{session.company}</td>
                <td>{session.specialization}</td>
                <td>{session.date} {session.time}</td>
                <td>{session.duration}</td>
                <td>{session.faculty}</td>
                <td>{session.mode}</td>
                <td>
                  {session.mode === 'Online' ? (
                    <a href={session.link} target="_blank" rel="noopener noreferrer">
                      <FaLink /> Join
                    </a>
                  ) : (
                    session.venue
                  )}
                </td>
                <td>{session.attendedStudents || 0}/{session.totalStudents || 0}</td>
                <td>{getStatusBadge(session.status)}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit" title="Edit Session">
                      <FaEdit />
                    </button>
                    <button 
                      className="action-btn delete" 
                      title="Delete Session"
                      onClick={() => handleDeleteSession(session.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Attendance Modal */}
      {showModal && selectedSession && (
        <div className="modal-overlay">
          <div className="session-modal">
            <div className="modal-header">
              <h2>{selectedSession.title} - Attendance</h2>
              <button className="close-btn" onClick={closeModal}>
                <FaTimes />
              </button>
            </div>

            <div className="session-details">
              <div className="details-grid">
                <div className="detail-item">
                  <label>Company:</label>
                  <span>{selectedSession.company}</span>
                </div>
                <div className="detail-item">
                  <label>Specialization:</label>
                  <span>{selectedSession.specialization}</span>
                </div>
                <div className="detail-item">
                  <label>Date & Time:</label>
                  <span>{selectedSession.date} {selectedSession.time}</span>
                </div>
                <div className="detail-item">
                  <label>Faculty:</label>
                  <span>{selectedSession.faculty}</span>
                </div>
              </div>

              <div className="attendance-summary">
                <div className="summary-card">
                  <h3>Total Students</h3>
                  <p>{selectedSession.totalStudents || 0}</p>
                </div>
                <div className="summary-card">
                  <h3>Attended</h3>
                  <p>{selectedSession.attendedStudents || 0}</p>
                </div>
              </div>

              <div className="upload-section">
                <h3>Upload Attendance</h3>
                <div className="upload-area">
                  <label className="file-upload-label">
                    <FaFileExcel />
                    <span>Import Excel File</span>
                    <input
                      type="file"
                      accept=".xlsx,.xls"
                      onChange={handleAttendanceImport}
                      style={{ display: 'none' }}
                    />
                  </label>
                  <small>Excel file should contain columns: Name, Email</small>
                </div>
              </div>

              {sessionAttendance.length > 0 && (
                <div className="attendance-table">
                  <h3>Attendance List</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sessionAttendance.map((student, index) => (
                        <tr key={index}>
                          <td>{student.name}</td>
                          <td>{student.email}</td>
                          <td>
                            <span className="status-badge attended">
                              {student.status}
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
    </div>
  );
};

export default PrepSessions;