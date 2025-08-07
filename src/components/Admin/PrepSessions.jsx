import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaCalendarAlt } from 'react-icons/fa';
import './PrepSessions.css';

const PrepSessions = () => {
  const [sessions, setSessions] = useState([
    {
      id: 1,
      title: "Interview Skills Workshop",
      date: "2024-02-20",
      time: "14:00",
      duration: "2 hours",
      conductor: "Mr. John Smith",
      type: "Technical",
      venue: "Seminar Hall 1",
      description: "Hands-on workshop focusing on technical interview preparation",
      totalStudents: 45,
      attendedStudents: 40,
      status: "Completed"
    },
    {
      id: 2,
      title: "Resume Building Session",
      date: "2024-02-25",
      time: "10:00",
      duration: "1.5 hours",
      conductor: "Ms. Sarah Johnson",
      type: "Soft Skills",
      venue: "Conference Room A",
      description: "Learn how to create compelling resumes that get noticed",
      totalStudents: 30,
      attendedStudents: 0,
      status: "Scheduled"
    }
  ]);

  const [newSession, setNewSession] = useState({
    title: "",
    date: "",
    time: "",
    duration: "",
    conductor: "",
    type: "",
    venue: "",
    description: ""
  });

  const [showForm, setShowForm] = useState(false);

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
      date: "",
      time: "",
      duration: "",
      conductor: "",
      type: "",
      venue: "",
      description: ""
    });
    setShowForm(false); // Hide form after submission
  };

  const handleDeleteSession = (id) => {
    setSessions(sessions.filter(session => session.id !== id));
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
            </div>

            <div className="form-row">
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
              <div className="form-group">
                <label>Conductor</label>
                <input
                  type="text"
                  value={newSession.conductor}
                  onChange={(e) => setNewSession({...newSession, conductor: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Session Type</label>
                <select
                  value={newSession.type}
                  onChange={(e) => setNewSession({...newSession, type: e.target.value})}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Technical">Technical</option>
                  <option value="Soft Skills">Soft Skills</option>
                  <option value="Group Discussion">Group Discussion</option>
                  <option value="Mock Interview">Mock Interview</option>
                  <option value="Resume Building">Resume Building</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Venue</label>
                <input
                  type="text"
                  value={newSession.venue}
                  onChange={(e) => setNewSession({...newSession, venue: e.target.value})}
                  required
                />
              </div>
              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <label>Description</label>
                <textarea
                  value={newSession.description}
                  onChange={(e) => setNewSession({...newSession, description: e.target.value})}
                  placeholder="Brief description of the session"
                  required
                />
              </div>
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
              <th>Date</th>
              <th>Time</th>
              <th>Duration</th>
              <th>Conductor</th>
              <th>Type</th>
              <th>Venue</th>
              <th>Attendance</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session.id}>
                <td><strong>{session.title}</strong></td>
                <td>{session.date}</td>
                <td>{session.time}</td>
                <td>{session.duration}</td>
                <td>{session.conductor}</td>
                <td>{session.type}</td>
                <td>{session.venue}</td>
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
    </div>
  );
};

export default PrepSessions;
