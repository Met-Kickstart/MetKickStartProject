import React, { useState } from 'react';
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

  const handleAddSession = (e) => {
    e.preventDefault();
    setSessions([...sessions, { ...newSession, id: sessions.length + 1, status: "Scheduled" }]);
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
  };

  return (
    <div className="prep-sessions">
      <div className="sessions-header">
        <h2>Preparation Sessions</h2>
        <button className="add-session-btn">Add New Session</button>
      </div>

      {/* Session Form */}
      <form onSubmit={handleAddSession} className="session-form">
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
            <label>Venue</label>
            <input
              type="text"
              value={newSession.venue}
              onChange={(e) => setNewSession({...newSession, venue: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={newSession.description}
            onChange={(e) => setNewSession({...newSession, description: e.target.value})}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Schedule Session</button>
      </form>

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
              <th>Venue</th>
              <th>Attendance</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map(session => (
              <tr key={session.id}>
                <td>{session.title}</td>
                <td>{session.date}</td>
                <td>{session.time}</td>
                <td>{session.duration}</td>
                <td>{session.conductor}</td>
                <td>{session.venue}</td>
                <td>{session.attendedStudents || 0}/{session.totalStudents || 0}</td>
                <td>
                  <span className={`status-badge ${session.status.toLowerCase()}`}>
                    {session.status}
                  </span>
                </td>
                <td>
                  <button className="action-btn edit">Edit</button>
                  <button className="action-btn delete">Delete</button>
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