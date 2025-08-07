import React, { useState } from 'react';
import { FaCalculator, FaBook } from 'react-icons/fa';
import './TestProcess.css';

const TestProcess = () => {
  const [activeTab, setActiveTab] = useState('prep-sessions');

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
                <h4>Upcoming Sessions</h4>
                <div className="sessions-grid">
                  <div className="session-card">
                    <div className="session-header">
                      <span className="session-tag">Interview Prep</span>
                      <span className="session-date">Aug 10, 2025</span>
                    </div>
                    <h5>HR Interview Techniques</h5>
                    <div className="session-details">
                      <p><strong>Time:</strong> 2:00 PM - 4:00 PM</p>
                      <p><strong>Venue:</strong> Seminar Hall 1</p>
                      <p><strong>Speaker:</strong> Ms. Sarah Johnson</p>
                    </div>
                    <button className="register-btn">Register Now</button>
                  </div>
                  <div className="session-card">
                    <div className="session-header">
                      <span className="session-tag">Technical</span>
                      <span className="session-date">Aug 15, 2025</span>
                    </div>
                    <h5>System Design Principles</h5>
                    <div className="session-details">
                      <p><strong>Time:</strong> 10:00 AM - 12:00 PM</p>
                      <p><strong>Venue:</strong> Virtual Session</p>
                      <p><strong>Speaker:</strong> Mr. David Clark</p>
                    </div>
                    <button className="register-btn">Register Now</button>
                  </div>
                </div>
              </div>

              <div className="completed-sessions">
                <h4>Completed Sessions</h4>
                <div className="sessions-grid">
                  <div className="session-card completed">
                    <div className="session-header">
                      <span className="session-tag">Aptitude</span>
                      <span className="session-date">Aug 5, 2025</span>
                    </div>
                    <h5>Quantitative Aptitude Workshop</h5>
                    <div className="session-details">
                      <p><strong>Duration:</strong> 2 hours</p>
                      <p><strong>Attended:</strong> Yes</p>
                      <p><strong>Resources:</strong> <a href="#">Download Materials</a></p>
                    </div>
                    <button className="feedback-btn">Provide Feedback</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'aptitude' && (
          <div className="aptitude-section">
            <div className="section-header">
              <h3><FaCalculator className="section-icon" /> Aptitude Tests</h3>
            </div>

            <div className="aptitude-stats">
              <div className="aptitude-card total-tests">
                <div className="card-header">
                  <h4>Total Available Tests</h4>
                  <span className="badge">15 Tests</span>
                </div>
                <div className="tests-list">
                  <div className="test-item">
                    <p className="test-name">Quantitative Aptitude</p>
                    <span className="test-count">5 Tests</span>
                  </div>
                  <div className="test-item">
                    <p className="test-name">Logical Reasoning</p>
                    <span className="test-count">4 Tests</span>
                  </div>
                  <div className="test-item">
                    <p className="test-name">Verbal Ability</p>
                    <span className="test-count">3 Tests</span>
                  </div>
                  <div className="test-item">
                    <p className="test-name">Technical Assessment</p>
                    <span className="test-count">3 Tests</span>
                  </div>
                </div>
              </div>

              <div className="aptitude-card tests-taken">
                <div className="card-header">
                  <h4>Your Test Progress</h4>
                  <span className="badge">8 Completed</span>
                </div>
                <div className="tests-list">
                  <div className="test-item">
                    <p className="test-name">Quantitative Aptitude</p>
                    <div className="progress-info">
                      <span className="progress-text">3/5 Tests</span>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="test-item">
                    <p className="test-name">Logical Reasoning</p>
                    <div className="progress-info">
                      <span className="progress-text">2/4 Tests</span>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="test-item">
                    <p className="test-name">Verbal Ability</p>
                    <div className="progress-info">
                      <span className="progress-text">2/3 Tests</span>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '67%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="test-item">
                    <p className="test-name">Technical Assessment</p>
                    <div className="progress-info">
                      <span className="progress-text">1/3 Tests</span>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '33%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestProcess;
