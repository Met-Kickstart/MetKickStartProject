import React, { useState } from 'react';
import { FaCalculator, FaBook, FaLink, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import './TestProcess.css';

const TestProcess = () => {
  const [activeTab, setActiveTab] = useState('prep-sessions');

  // Sample data for prep sessions
  const prepSessions = [
    {
      id: 1,
      companyName: "Tech Solutions Inc.",
      sessionDate: "Aug 10, 2025",
      topic: "Software Development",
      time: "2:00 PM - 4:00 PM",
      instructor: "Ms. Sarah Johnson",
      mode: "Online",
      link: "https://meet.google.com/abc-defg-hij",
    },
    {
      id: 2,
      companyName: "Global Analytics Ltd",
      sessionDate: "Aug 15, 2025",
      topic: "Data Science",
      time: "10:00 AM - 12:00 PM",
      instructor: "Mr. David Clark",
      mode: "Offline",
      venue: "Seminar Hall 2, Block A"
    }
  ];

  // Sample data for aptitude tests (modified to include platform links)
  const aptitudeTests = [
    {
      id: 1,
      platform: "HackerRank",
      description: "Complete these practice tests for TCS preparation",
      link: "https://www.hackerrank.com/test/sample",
      company: "TCS",
      availableUntil: "2025-08-20"
    },
    {
      id: 2,
      platform: "Codility",
      description: "Practice aptitude questions for upcoming Infosys drive",
      link: "https://www.codility.com/test/sample",
      company: "Infosys",
      availableUntil: "2025-08-25"
    }
  ];

  return (
    <div className="test-process">
      <div className="test-process-header">
        <div className="tab-buttons">
          <button
            className={`tab-btn ${activeTab === 'prep-sessions' ? 'active' : ''}`}
            onClick={() => setActiveTab('prep-sessions')}
          >
            <FaBook /> Prep Sessions
          </button>
          <button
            className={`tab-btn ${activeTab === 'aptitude' ? 'active' : ''}`}
            onClick={() => setActiveTab('aptitude')}
          >
            <FaCalculator /> Aptitude Tests
          </button>
        </div>
      </div>

      <div className="test-process-content">
        {activeTab === 'prep-sessions' && (
          <div className="prep-sessions-section">
            <div className="section-header">
              <h3><FaBook className="section-icon" /> Preparation Sessions</h3>
            </div>
            
            <div className="sessions-overview">
              <div className="upcoming-sessions">
                <h4>Scheduled Sessions</h4>
                <div className="sessions-grid">
                  {prepSessions.map(session => (
                    <div key={session.id} className="session-card">
                      <div className="session-header">
                        <div className="header-labels">
                          <span className="label-text">Company Name:</span>
                          <h4 className="company-name">{session.companyName}</h4>
                        </div>
                        <span className="session-date">{session.sessionDate}</span>
                      </div>
                      <div className="session-main-info">
                        <div className="info-label-group">
                          <span className="label-text">Session on:</span>
                          <span className="specialization-tag">{session.topic}</span>
                        </div>
                      </div>
                      <div className="session-details">
                        <div className="detail-row">
                          <p><strong>Time:</strong> {session.time}</p>
                          <p><strong>Instructor:</strong> {session.instructor}</p>
                        </div>
                        <div className="mode-section">
                          <p><strong>Mode:</strong> {session.mode}</p>
                          {session.mode === 'Online' ? (
                            <div className="online-link">
                              <a 
                                href={session.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="join-link"
                              >
                                <FaLink /> Join Session
                              </a>
                            </div>
                          ) : (
                            <p className="venue">
                              <FaMapMarkerAlt /> {session.venue}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'aptitude' && (
          <div className="aptitude-section">
            <div className="section-header">
              <h3><FaCalculator className="section-icon" /> Mock Aptitude Tests</h3>
            </div>

            <div className="aptitude-tests-grid">
              {aptitudeTests.map(test => (
                <div key={test.id} className="aptitude-test-card">
                  <div className="test-card-header">
                    <h4>{test.platform}</h4>
                    <span className="company-badge">{test.company}</span>
                  </div>
                  
                  <p className="test-description">{test.description}</p>
                  
                  <div className="test-meta">
                    <span className="available-until">
                      Available until: {new Date(test.availableUntil).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="test-actions">
                    <a 
                      href={test.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="practice-link"
                    >
                      <FaExternalLinkAlt /> Start Practice
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestProcess;
