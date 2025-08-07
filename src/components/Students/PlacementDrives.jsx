import React, { useState } from 'react';
import { FaBriefcase, FaBuilding, FaCalendar, FaGraduationCap, FaRupeeSign } from 'react-icons/fa';
import './PlacementDrives.css';

const PlacementDrives = () => {
  const [activeTab, setActiveTab] = useState('active');
  
  // Example data - in real app, this would come from props or API
  const drives = {
    active: [
      {
        id: 1,
        companyName: "Tech Solutions Inc",
        role: "Software Developer",
        package: "8-12 LPA",
        location: "Pune",
        deadline: "2025-08-15",
        eligibility: {
          cgpa: "7.5",
          branches: ["Computer Science", "Information Technology"],
          backlogs: "No active backlogs",
          skills: ["Java", "Python", "Web Development"]
        },
        rounds: ["Online Test", "Technical Interview", "HR Interview"],
        status: "Applications Open"
      },
      {
        id: 2,
        companyName: "Global Analytics Ltd",
        role: "Data Analyst",
        package: "7-9 LPA",
        location: "Mumbai",
        deadline: "2025-08-20",
        eligibility: {
          cgpa: "7.0",
          branches: ["Computer Science", "Data Science"],
          backlogs: "No active backlogs",
          skills: ["SQL", "Python", "Data Analysis"]
        },
        rounds: ["Aptitude Test", "Technical Round", "HR Discussion"],
        status: "Applications Open"
      }
    ],
    upcoming: [
      {
        id: 3,
        companyName: "Cloud Systems Corp",
        role: "Cloud Engineer",
        package: "10-14 LPA",
        location: "Bangalore",
        expectedDate: "2025-09-01",
        eligibility: {
          cgpa: "7.5",
          branches: ["Computer Science", "Information Technology"],
          backlogs: "No backlogs",
          skills: ["AWS", "Azure", "DevOps"]
        },
        status: "Coming Soon"
      }
    ],
    applied: [
      {
        id: 4,
        companyName: "Innovation Tech",
        role: "Full Stack Developer",
        package: "9-11 LPA",
        location: "Pune",
        appliedDate: "2025-07-25",
        currentRound: "Technical Interview",
        nextRound: "HR Interview",
        status: "In Progress"
      }
    ]
  };

  return (
    <div className="placement-drives">
      <div className="drives-header">
        <h2><FaBriefcase /> Placement Drives</h2>
        <div className="drive-tabs">
          <button 
            className={`tab-btn ${activeTab === 'active' ? 'active' : ''}`}
            onClick={() => setActiveTab('active')}
          >
            Active Drives
          </button>
          <button 
            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Drives
          </button>
          <button 
            className={`tab-btn ${activeTab === 'applied' ? 'active' : ''}`}
            onClick={() => setActiveTab('applied')}
          >
            Applied Drives
          </button>
        </div>
      </div>

      <div className="drives-content">
        {activeTab === 'active' && (
          <div className="drives-grid">
            {drives.active.map(drive => (
              <div key={drive.id} className="drive-card">
                <div className="drive-header">
                  <div className="company-info">
                    <h3>{drive.companyName}</h3>
                    <span className="role">{drive.role}</span>
                  </div>
                  <span className={`status-badge ${drive.status.toLowerCase().replace(' ', '-')}`}>
                    {drive.status}
                  </span>
                </div>

                <div className="drive-details">
                  <div className="detail-item">
                    <FaRupeeSign className="detail-icon" />
                    <span>Package: {drive.package}</span>
                  </div>
                  <div className="detail-item">
                    <FaBuilding className="detail-icon" />
                    <span>Location: {drive.location}</span>
                  </div>
                  <div className="detail-item">
                    <FaCalendar className="detail-icon" />
                    <span>Deadline: {new Date(drive.deadline).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="eligibility-section">
                  <h4>Eligibility Criteria</h4>
                  <div className="eligibility-details">
                    <div className="eligibility-item">
                      <FaGraduationCap className="eligibility-icon" />
                      <span>Min. CGPA: {drive.eligibility.cgpa}</span>
                    </div>
                    <div className="eligibility-item">
                      <span className="label">Branches:</span>
                      <div className="badges">
                        {drive.eligibility.branches.map((branch, index) => (
                          <span key={index} className="branch-badge">{branch}</span>
                        ))}
                      </div>
                    </div>
                    <div className="eligibility-item">
                      <span className="label">Required Skills:</span>
                      <div className="badges">
                        {drive.eligibility.skills.map((skill, index) => (
                          <span key={index} className="skill-badge">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounds-section">
                  <h4>Selection Process</h4>
                  <div className="rounds-timeline">
                    {drive.rounds.map((round, index) => (
                      <div key={index} className="round-item">
                        <div className="round-number">{index + 1}</div>
                        <span>{round}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="apply-btn">Apply Now</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'upcoming' && (
          <div className="drives-grid">
            {drives.upcoming.map(drive => (
              <div key={drive.id} className="drive-card upcoming">
                <div className="drive-header">
                  <div className="company-info">
                    <h3>{drive.companyName}</h3>
                    <span className="role">{drive.role}</span>
                  </div>
                  <span className="status-badge coming-soon">Coming Soon</span>
                </div>

                <div className="drive-details">
                  <div className="detail-item">
                    <FaRupeeSign className="detail-icon" />
                    <span>Package: {drive.package}</span>
                  </div>
                  <div className="detail-item">
                    <FaBuilding className="detail-icon" />
                    <span>Location: {drive.location}</span>
                  </div>
                  <div className="detail-item">
                    <FaCalendar className="detail-icon" />
                    <span>Expected Date: {new Date(drive.expectedDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="eligibility-section">
                  <h4>Eligibility Criteria</h4>
                  <div className="eligibility-details">
                    <div className="eligibility-item">
                      <FaGraduationCap className="eligibility-icon" />
                      <span>Min. CGPA: {drive.eligibility.cgpa}</span>
                    </div>
                    <div className="eligibility-item">
                      <span className="label">Branches:</span>
                      <div className="badges">
                        {drive.eligibility.branches.map((branch, index) => (
                          <span key={index} className="branch-badge">{branch}</span>
                        ))}
                      </div>
                    </div>
                    <div className="eligibility-item">
                      <span className="label">Required Skills:</span>
                      <div className="badges">
                        {drive.eligibility.skills.map((skill, index) => (
                          <span key={index} className="skill-badge">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button className="notify-btn">Notify Me</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'applied' && (
          <div className="drives-grid">
            {drives.applied.map(drive => (
              <div key={drive.id} className="drive-card applied">
                <div className="drive-header">
                  <div className="company-info">
                    <h3>{drive.companyName}</h3>
                    <span className="role">{drive.role}</span>
                  </div>
                  <span className="status-badge in-progress">In Progress</span>
                </div>

                <div className="drive-details">
                  <div className="detail-item">
                    <FaRupeeSign className="detail-icon" />
                    <span>Package: {drive.package}</span>
                  </div>
                  <div className="detail-item">
                    <FaBuilding className="detail-icon" />
                    <span>Location: {drive.location}</span>
                  </div>
                  <div className="detail-item">
                    <FaCalendar className="detail-icon" />
                    <span>Applied: {new Date(drive.appliedDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="application-status">
                  <h4>Application Status</h4>
                  <div className="status-details">
                    <div className="status-item">
                      <span className="label">Current Round:</span>
                      <span className="value highlight">{drive.currentRound}</span>
                    </div>
                    <div className="status-item">
                      <span className="label">Next Round:</span>
                      <span className="value">{drive.nextRound}</span>
                    </div>
                  </div>
                </div>

                <button className="view-details-btn">View Details</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlacementDrives;
