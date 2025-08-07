import React, { useState } from 'react';
import { FaUser, FaGraduationCap, FaBriefcase, FaEnvelope, FaPhone } from 'react-icons/fa';
import './StudentProfile.css';

const StudentProfile = ({ profile }) => {
  const [activeTab, setActiveTab] = useState('personal');

  const defaultProfile = {
    id: '',
    rollNo: '',
    fullName: '',
    contactNo: '',
    officialEmail: '',
    personalEmail: '',
    profileImage: 'https://ui-avatars.com/api/?name=Student&background=random',
    address: '',
    dateOfBirth: '',
    academics: {
      tenthPercentage: '',
      twelfthPercentage: '',
      graduationStream: '',
      graduationDegree: '',
      university: '',
      graduationCGPA: '',
      mbaFirstYearCGPA: '',
      mbaSpecialization: ''
    },
    ojt: {
      companyName: '',
      projectTitle: '',
      joiningDate: '',
      companyGuide: {
        name: '',
        contactNo: '',
        emailId: ''
      },
      collegeGuideName: ''
    },
    linkedinUrl: '',
    resumeFile: null,
    companiesApplied: [],
    status: 'Not Placed',
    prepSessionsAttended: 0,
    aptitudeTestsAttended: 0,
    companiesAppliedCount: 0
  };

  const studentData = { ...defaultProfile, ...profile };

  return (
    <div className="student-profile">
      <div className="profile-header">
        <div className="profile-image-container">
          <img 
            src={studentData.profileImage} 
            alt={studentData.fullName} 
            className="profile-image"
          />
          <div className="profile-status">
            <span className={`status-badge ${studentData.status.toLowerCase().replace(' ', '-')}`}>
              {studentData.status}
            </span>
          </div>
        </div>
        <div className="profile-info-header">
          <h2>{studentData.fullName}</h2>
          <p className="roll-no">Roll No: {studentData.rollNo}</p>
          <div className="quick-contacts">
            <span><FaEnvelope /> {studentData.officialEmail}</span>
            <span><FaPhone /> {studentData.contactNo}</span>
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        <button 
          className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          <FaUser /> Personal Details
        </button>
        <button 
          className={`tab-btn ${activeTab === 'academic' ? 'active' : ''}`}
          onClick={() => setActiveTab('academic')}
        >
          <FaGraduationCap /> Academic Details
        </button>
        <button 
          className={`tab-btn ${activeTab === 'placement' ? 'active' : ''}`}
          onClick={() => setActiveTab('placement')}
        >
          <FaBriefcase /> Placement Details
        </button>
      </div>

      <div className="profile-content">
        {activeTab === 'personal' && (
          <div className="personal-details">
            <div className="info-card">
              <h3>Contact Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>Official Email</label>
                  <p>{studentData.officialEmail}</p>
                </div>
                <div className="info-item">
                  <label>Personal Email</label>
                  <p>{studentData.personalEmail}</p>
                </div>
                <div className="info-item">
                  <label>Contact Number</label>
                  <p>{studentData.contactNo}</p>
                </div>
                <div className="info-item">
                  <label>Address</label>
                  <p>{studentData.address}</p>
                </div>
                <div className="info-item">
                  <label>Date of Birth</label>
                  <p>{studentData.dateOfBirth}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'academic' && (
          <div className="academic-details">
            <div className="info-card">
              <h3>Education Details</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>10th Percentage</label>
                  <p>{studentData.academics.tenthPercentage}%</p>
                </div>
                <div className="info-item">
                  <label>12th Percentage</label>
                  <p>{studentData.academics.twelfthPercentage}%</p>
                </div>
                <div className="info-item">
                  <label>Graduation Stream</label>
                  <p>{studentData.academics.graduationStream}</p>
                </div>
                <div className="info-item">
                  <label>Graduation Degree</label>
                  <p>{studentData.academics.graduationDegree}</p>
                </div>
                <div className="info-item">
                  <label>University</label>
                  <p>{studentData.academics.university}</p>
                </div>
                <div className="info-item">
                  <label>Graduation CGPA</label>
                  <p>{studentData.academics.graduationCGPA}</p>
                </div>
                <div className="info-item">
                  <label>MBA First Year CGPA</label>
                  <p>{studentData.academics.mbaFirstYearCGPA}</p>
                </div>
                <div className="info-item">
                  <label>MBA Specialization</label>
                  <p>{studentData.academics.mbaSpecialization}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'placement' && (
          <div className="placement-details">
            <div className="info-card status-card">
              <h3>Placement Status</h3>
              <div className="placement-stats">
                <div className="stat-item status-item">
                  <span className="stat-label">Current Status</span>
                  <span className={`status-badge ${studentData.status.toLowerCase().replace(' ', '-')}`}>
                    {studentData.status}
                  </span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Companies Applied</span>
                  <span className="stat-value zoho-purple">{studentData.companiesAppliedCount}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Prep Sessions</span>
                  <span className="stat-value zoho-green">{studentData.prepSessionsAttended}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Mock Aptitude Tests</span>
                  <span className="stat-value zoho-blue">{studentData.aptitudeTestsAttended}</span>
                </div>
              </div>
            </div>


            <div className="info-card ojt-card">
              <h3>OJT Details</h3>
              <div className="ojt-grid">
                <div className="info-item">
                  <label>Company Name</label>
                  <p>{studentData.ojt.companyName || 'Not provided'}</p>
                </div>
                <div className="info-item">
                  <label>Project Title</label>
                  <p>{studentData.ojt.projectTitle || 'Not provided'}</p>
                </div>
                <div className="info-item">
                  <label>Joining Date</label>
                  <p>{studentData.ojt.joiningDate || 'Not provided'}</p>
                </div>
                <div className="info-item">
                  <label>College Guide</label>
                  <p>{studentData.ojt.collegeGuideName || 'Not provided'}</p>
                </div>
                <div className="info-item full-width">
                  <label>Company Guide Details</label>
                  <div className="guide-details">
                    <p><strong>Name:</strong> {studentData.ojt.companyGuide.name || 'Not provided'}</p>
                    <p><strong>Contact:</strong> {studentData.ojt.companyGuide.contactNo || 'Not provided'}</p>
                    <p><strong>Email:</strong> {studentData.ojt.companyGuide.emailId || 'Not provided'}</p>
                  </div>
                </div>
              </div>
            </div>

            {studentData.companiesApplied.length > 0 && (
              <div className="info-card companies-card">
                <h3>Companies Applied</h3>
                <div className="companies-list">
                  {studentData.companiesApplied.map((company, index) => (
                    <div key={index} className="company-item">
                      <h4>{company.name}</h4>
                      <div className="company-details">
                        <span>Applied: {new Date(company.date).toLocaleDateString()}</span>
                        <span>Current Round: {company.round}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentProfile;
