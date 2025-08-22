import React, { useState } from 'react';
import { FaBriefcase, FaBuilding, FaCalendar, FaGraduationCap, FaRupeeSign } from 'react-icons/fa';
import './PlacementDrives.css';

const PlacementDrives = () => {
  const [activeTab, setActiveTab] = useState('nomination');
  
  // Updated drives data to match admin's structure
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
          { name: "Shortlist", status: "completed", date: "2025-08-01" },
          { name: "Aptitude/Written Test", status: "completed", date: "2025-08-03" },
          { name: "Group Discussion", status: "current", date: "2025-08-05" },
          { name: "Round 1", status: "upcoming" },
          { name: "Round 2", status: "upcoming" },
          { name: "Round 3", status: "upcoming" },
          { name: "Round 4", status: "upcoming" }
        ],
        currentRound: "Group Discussion",
        status: "In Progress"
      },
      {
        id: 4,
        companyName: "Data Analytics Pro",
        jobTitle: "Data Scientist",
        roundStatus: [
          { name: "Shortlist", status: "completed", date: "2025-08-02" },
          { name: "Aptitude/Written Test", status: "completed", date: "2025-08-04" },
          { name: "Group Discussion", status: "current", date: "2025-08-06" },
          { name: "Round 1", status: "upcoming" },
          { name: "Round 2", status: "upcoming" }
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
          { name: "Shortlist", status: "Passed", score: "Selected" },
          { name: "Aptitude/Written Test", status: "Passed", score: "85/100" },
          { name: "Group Discussion", status: "Passed", feedback: "Good communication skills" },
          { name: "Round 1", status: "Passed", feedback: "Strong technical knowledge" },
          { name: "Round 2", status: "Passed", feedback: "Excellent problem-solving" }
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
          { name: "Shortlist", status: "Passed", score: "Selected" },
          { name: "Aptitude/Written Test", status: "Passed", score: "75/100" },
          { name: "Group Discussion", status: "Passed", feedback: "Good team player" },
          { name: "Round 1", status: "Not Cleared", feedback: "Need improvement in system design concepts" }
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
                            {round.status === "Passed" ? "Cleared" : "Not Cleared"}
                          </span>
                        </div>
                      </div>
                    ))}
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

export default PlacementDrives;
