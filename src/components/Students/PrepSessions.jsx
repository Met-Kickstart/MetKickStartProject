import React, { useState } from 'react';
import { FaBook, FaCalendarAlt, FaClock, FaUserTie, FaVideo, FaFileAlt, FaCheckCircle, FaChalkboardTeacher } from 'react-icons/fa';
import './PrepSessions.css';

const PrepSessions = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  // Example data - in real app, this would come from props or API
  const sessions = {
    upcoming: [
      {
        id: 1,
        title: "Technical Interview Preparation",
        type: "Workshop",
        date: "2025-08-10",
        time: "10:00 AM - 12:00 PM",
        instructor: "Prof. Sarah Johnson",
        mode: "Online",
        platform: "Microsoft Teams",
        topics: [
          "Data Structures & Algorithms",
          "System Design",
          "Problem Solving",
          "Code Review Practice"
        ],
        prerequisites: [
          "Basic programming knowledge",
          "Laptop with coding environment"
        ],
        registrationDeadline: "2025-08-09"
      },
      {
        id: 2,
        title: "HR Interview Skills",
        type: "Interactive Session",
        date: "2025-08-12",
        time: "2:00 PM - 4:00 PM",
        instructor: "Mr. Robert Wilson",
        mode: "Offline",
        venue: "Seminar Hall 1",
        topics: [
          "Common HR Questions",
          "Salary Negotiation",
          "Professional Etiquette",
          "Mock Interviews"
        ],
        prerequisites: [
          "Updated Resume",
          "Professional Attire"
        ],
        registrationDeadline: "2025-08-11"
      }
    ],
    completed: [
      {
        id: 3,
        title: "Resume Building Workshop",
        type: "Workshop",
        date: "2025-08-01",
        instructor: "Ms. Emily Parker",
        feedback: "Excellent participation",
        materials: [
          { name: "Resume Templates", type: "pdf" },
          { name: "Best Practices Guide", type: "pdf" },
          { name: "Workshop Recording", type: "video" }
        ],
        rating: 4.8
      },
      {
        id: 4,
        title: "Group Discussion Practice",
        type: "Interactive Session",
        date: "2025-08-03",
        instructor: "Dr. Michael Brown",
        feedback: "Good communication skills shown",
        materials: [
          { name: "GD Topics PDF", type: "pdf" },
          { name: "Session Notes", type: "pdf" }
        ],
        rating: 4.5
      }
    ]
  };

  return (
    <div className="prep-sessions">
      <div className="sessions-header">
        <h2><FaBook /> Preparation Sessions</h2>
        <div className="session-tabs">
          <button 
            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Sessions
          </button>
          <button 
            className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed Sessions
          </button>
        </div>
      </div>

      <div className="sessions-content">
        {activeTab === 'upcoming' && (
          <div className="sessions-grid">
            {sessions.upcoming.map(session => (
              <div key={session.id} className="session-card">
                <div className="session-header">
                  <div className="session-type">
                    <FaChalkboardTeacher />
                    <span>{session.type}</span>
                  </div>
                  <h3>{session.title}</h3>
                </div>

                <div className="session-details">
                  <div className="detail-row">
                    <div className="detail-item">
                      <FaCalendarAlt className="detail-icon" />
                      <div className="detail-text">
                        <span className="label">Date</span>
                        <span className="value">{new Date(session.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <FaClock className="detail-icon" />
                      <div className="detail-text">
                        <span className="label">Time</span>
                        <span className="value">{session.time}</span>
                      </div>
                    </div>
                  </div>

                  <div className="detail-row">
                    <div className="detail-item">
                      <FaUserTie className="detail-icon" />
                      <div className="detail-text">
                        <span className="label">Instructor</span>
                        <span className="value">{session.instructor}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <FaVideo className="detail-icon" />
                      <div className="detail-text">
                        <span className="label">Mode</span>
                        <span className="value">{session.mode}</span>
                      </div>
                    </div>
                  </div>

                  {session.mode === 'Online' && (
                    <div className="platform-info">
                      <span className="platform-label">Platform:</span>
                      <span className="platform-value">{session.platform}</span>
                    </div>
                  )}

                  {session.mode === 'Offline' && (
                    <div className="venue-info">
                      <span className="venue-label">Venue:</span>
                      <span className="venue-value">{session.venue}</span>
                    </div>
                  )}

                  <div className="topics-section">
                    <h4>Topics to be Covered</h4>
                    <ul className="topics-list">
                      {session.topics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="prerequisites-section">
                    <h4>Prerequisites</h4>
                    <ul className="prerequisites-list">
                      {session.prerequisites.map((prereq, index) => (
                        <li key={index}>{prereq}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="session-footer">
                    <div className="deadline-info">
                      Registration Deadline: {new Date(session.registrationDeadline).toLocaleDateString()}
                    </div>
                    <button className="register-btn">Register Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'completed' && (
          <div className="sessions-grid">
            {sessions.completed.map(session => (
              <div key={session.id} className="session-card completed">
                <div className="session-header">
                  <div className="session-type">
                    <FaCheckCircle />
                    <span>{session.type}</span>
                  </div>
                  <h3>{session.title}</h3>
                </div>

                <div className="session-details">
                  <div className="detail-row">
                    <div className="detail-item">
                      <FaCalendarAlt className="detail-icon" />
                      <div className="detail-text">
                        <span className="label">Attended On</span>
                        <span className="value">{new Date(session.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <FaUserTie className="detail-icon" />
                      <div className="detail-text">
                        <span className="label">Instructor</span>
                        <span className="value">{session.instructor}</span>
                      </div>
                    </div>
                  </div>

                  <div className="feedback-section">
                    <h4>Feedback</h4>
                    <p>{session.feedback}</p>
                    <div className="rating">
                      <span className="rating-label">Session Rating:</span>
                      <span className="rating-value">{session.rating}/5.0</span>
                      <div className="rating-stars" style={{ '--rating': session.rating }}>
                        ★★★★★
                      </div>
                    </div>
                  </div>

                  <div className="materials-section">
                    <h4>Session Materials</h4>
                    <div className="materials-grid">
                      {session.materials.map((material, index) => (
                        <button key={index} className={`material-btn ${material.type}`}>
                          <FaFileAlt className="material-icon" />
                          <span>{material.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PrepSessions;
