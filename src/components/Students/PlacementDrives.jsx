import React, { useState } from 'react';
import { FaBriefcase, FaBuilding, FaCalendar, FaGraduationCap, FaRupeeSign } from 'react-icons/fa';
import './PlacementDrives.css';

const PlacementDrives = () => {
  const [activeTab, setActiveTab] = useState('nomination');
  
  // Example data - in real app, this would come from props or API
  const drives = {
    nomination: [
      {
        id: 1,
        companyName: "Tech Solutions Inc",
        jobTitle: "Software Development Engineer",
        jobDescription: "We are looking for a passionate Software Development Engineer to design, develop and maintain scalable applications. You will work with cutting-edge technologies and collaborate with cross-functional teams.",
        ctc: "12-15 LPA",
        location: "Pune",
        startDate: "2025-09-01",
        endDate: "2025-08-20",
        vacancies: 15,
        numberOfRounds: 3,
        rounds: ["Online Assessment", "Technical Interview", "HR Discussion"],
        status: "Applications Open"
      },
      {
        id: 2,
        companyName: "Global Analytics Ltd",
        jobTitle: "Data Scientist",
        jobDescription: "Join our analytics team to drive data-driven decisions. You'll work on complex data problems, develop predictive models, and create actionable insights for business stakeholders.",
        ctc: "10-14 LPA",
        location: "Mumbai",
        startDate: "2025-09-15",
        endDate: "2025-08-25",
        vacancies: 8,
        numberOfRounds: 4,
        rounds: ["Aptitude Test", "Technical Assessment", "Case Study", "HR Round"],
        status: "Applications Open"
      }
    ],
    active: [
      {
        id: 3,
        companyName: "Cloud Systems Corp",
        jobTitle: "Cloud Engineer",
        roundStatus: [
          { name: "Shortlisted", status: "completed", date: "2025-08-01" },
          { name: "Round 1", status: "completed", date: "2025-08-03" },
          { name: " Round 2", status: "completed", date: "2025-08-05" },
          { name: "Round 3", status: "current", date: "2025-08-07" },
          { name: "Round 4", status: "upcoming" },
          { name: "Round 5", status: "upcoming" },
          { name: "HR Round", status: "upcoming" }
        ],
        currentRound: "Technical Round 1",
        status: "In Progress"
      },
      {
        id: 4,
        companyName: "Data Analytics Pro",
        jobTitle: "Data Scientist",
        roundStatus: [
          { name: "Shortlisted", status: "completed", date: "2025-08-02" },
          { name: "Round 1", status: "completed", date: "2025-08-04" },
          { name: "Round 2", status: "completed", date: "2025-08-06" },
          { name: "Round 3", status: "current", date: "2025-08-07" },
          { name: "Round 4", status: "upcoming" },
          { name: "Round 5", status: "upcoming" },
          { name: "HR Round", status: "upcoming" }
        ],
        currentRound: "Group Discussion",
        status: "In Progress"
      }
    ],
    completed: [
      {
        id: 4,
        companyName: "Innovation Tech",
        jobTitle: "Full Stack Developer",
        ctc: "9-11 LPA",
        location: "Pune",
        completedDate: "2025-07-25",
        rounds: [
          { name: "Online Test", status: "Passed", score: "85/100" },
          { name: "Technical Interview", status: "Passed", feedback: "Good technical knowledge" },
          { name: "HR Interview", status: "Passed", feedback: "Cultural fit" }
        ],
        finalStatus: "Selected",
        offerDetails: {
          ctc: "10.5 LPA",
          joiningDate: "2025-10-01",
          location: "Pune"
        }
      },
      {
        id: 5,
        companyName: "TechCorp Solutions",
        jobTitle: "Software Engineer",
        ctc: "8-10 LPA",
        location: "Mumbai",
        completedDate: "2025-07-20",
        rounds: [
          { name: "Aptitude Test", status: "Passed", score: "75/100" },
          { name: "Technical Round", status: "Not Cleared", feedback: "Need improvement in system design concepts" }
        ],
        finalStatus: "Not Selected",
        feedback: "Need more experience with system design patterns"
      }
    ]
  };

  return (
    <div className="placement-drives">
      <div className="drives-header">
        <h2><FaBriefcase /> Placement Drives</h2>
        <div className="drive-tabs">
          <button 
            className={`tab-btn ${activeTab === 'nomination' ? 'active' : ''}`}
            onClick={() => setActiveTab('nomination')}
          >
            Open for Nomination
          </button>
          <button 
            className={`tab-btn ${activeTab === 'active' ? 'active' : ''}`}
            onClick={() => setActiveTab('active')}
          >
            Active Drives
          </button>
          <button 
            className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="drives-content">
        {activeTab === 'nomination' && (
          <div className="drives-grid">
            {drives.nomination.map(drive => (
              <div key={drive.id} className="drive-card">
                <div className="drive-header">
                  <div className="company-info">
                    <label className="section-label">Company Name</label>
                    <h3>{drive.companyName}</h3>
                  </div>
                </div>

                <div className="job-title-section">
                  <label className="section-label">Job Title</label>
                  <h3 className="job-title-header">{drive.jobTitle}</h3>
                </div>

                <div className="job-description">
                  <h4>Job Description</h4>
                  <p>{drive.jobDescription}</p>
                </div>

                <div className="drive-details">
                  <div className="detail-item">
                    <FaRupeeSign className="detail-icon" />
                    <span>CTC: {drive.ctc}</span>
                  </div>
                  <div className="detail-item">
                    <FaBuilding className="detail-icon" />
                    <span>Location: {drive.location}</span>
                  </div>
                  <div className="detail-item">
                    <FaCalendar className="detail-icon" />
                    <span>Start Date: {new Date(drive.startDate).toLocaleDateString()}</span>
                  </div>
                  <div className="detail-item">
                    <FaCalendar className="detail-icon" />
                    <span>Last Date to Apply: {new Date(drive.endDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="drive-stats">
                  <div className="stat-item">
                    <span className="stat-label">Vacancies</span>
                    <span className="stat-value">{drive.vacancies}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Selection Rounds</span>
                    <span className="stat-value">{drive.numberOfRounds}</span>
                  </div>
                </div>

                <button className="apply-btn">Apply Now</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'active' && (
          <div className="drives-grid">
            {drives.active.map(drive => (
              <div key={drive.id} className="drive-card active">
                <div className="drive-header">
                  <div className="company-info">
                    <label className="section-label">Company Name</label>
                    <h3>{drive.companyName}</h3>
                  </div>
                  {/* <span className="status-badge in-progress">In Progress</span> */}
                </div>

                <div className="job-title-section">
                  <label className="section-label">Job Title</label>
                  <h3 className="job-title-header">{drive.jobTitle}</h3>
                </div>

                <div className="round-progress-section">
                  <h4>Selection Process Status</h4>
                  <div className="round-progress-list">
                    {drive.roundStatus.map((round, index) => (
                      <div key={index} className={`round-status-item ${round.status}`}>
                        <div className="round-status-content">
                          <div className="round-info">
                            <span className="round-name">{round.name}</span>
                            {round.date && (
                              <span className="round-date">
                                {new Date(round.date).toLocaleDateString()}
                              </span>
                            )}
                          </div>
                          <div className="status-indicator">
                            {round.status === 'completed' && '✓'}
                            {round.status === 'current' && '→'}
                            {round.status === 'upcoming' && '•'}
                          </div>
                        </div>
                        {index < drive.roundStatus.length - 1 && <div className="round-connector" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* <button className="view-status-btn">View Detailed Status</button> */}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'completed' && (
          <div className="drives-grid">
            {drives.completed.map(drive => (
              <div key={drive.id} className={`drive-card completed ${drive.finalStatus.toLowerCase()}`}>
                <div className="drive-header">
                  <div className="company-info">
                    <h3>{drive.companyName}</h3>
                    <span className="role">{drive.jobTitle}</span>
                  </div>
                  <span className={`status-badge ${drive.finalStatus.toLowerCase()}`}>
                    {drive.finalStatus}
                  </span>
                </div>

                <div className="drive-details">
                  <div className="detail-item">
                    <FaRupeeSign className="detail-icon" />
                    <span>Package: {drive.ctc}</span>
                  </div>
                  <div className="detail-item">
                    <FaBuilding className="detail-icon" />
                    <span>Location: {drive.location}</span>
                  </div>
                  <div className="detail-item">
                    <FaCalendar className="detail-icon" />
                    <span>Completed: {new Date(drive.completedDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="completion-summary">
                  <h4>Selection Process Summary</h4>
                  <div className="rounds-progress">
                    {drive.rounds.map((round, index) => (
                      <div key={index} className={`round-result ${round.status.toLowerCase()}`}>
                        <div className="round-result-header">
                          <span className="round-name">{round.name}</span>
                          <span className={`round-status ${round.status.toLowerCase()}`}>
                            {round.status}
                          </span>
                        </div>
                        {round.score && (
                          <div className="round-score">Score: {round.score}</div>
                        )}
                        {round.feedback && (
                          <div className="round-feedback">{round.feedback}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {drive.finalStatus === "Selected" && drive.offerDetails && (
                  <div className="offer-details">
                    <h4>Offer Details</h4>
                    <div className="offer-info">
                      <div className="offer-item">
                        <span className="label">Final CTC:</span>
                        <span className="value">{drive.offerDetails.ctc}</span>
                      </div>
                      <div className="offer-item">
                        <span className="label">Joining Date:</span>
                        <span className="value">
                          {new Date(drive.offerDetails.joiningDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="offer-item">
                        <span className="label">Location:</span>
                        <span className="value">{drive.offerDetails.location}</span>
                      </div>
                    </div>
                  </div>
                )}

                {drive.finalStatus === "Not Selected" && drive.feedback && (
                  <div className="feedback-section">
                    <h4>Feedback</h4>
                    <p className="feedback-text">{drive.feedback}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlacementDrives;
