import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompleteProfile from '../components/Students/CompleteProfile';
import { FaCalculator, FaBriefcase, FaBuilding, FaBook } from 'react-icons/fa';
import './StudentDashboard.css';

const StudentDashboard = ({ onLogout }) => {
  const [profileCompleted, setProfileCompleted] = useState(false);
  const [profile, setProfile] = useState(null);

  const handleProfileComplete = (profileData) => {
    setProfile(profileData);
    setProfileCompleted(true);
  };

  if (!profileCompleted) {
    return (
      <div className="student-dashboard">
        <Header isLoggedIn={true} onLogoutClick={onLogout} />
        <CompleteProfile onProfileComplete={handleProfileComplete} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="student-dashboard">
      <Header 
        isLoggedIn={true} 
        onLogoutClick={onLogout}
        profileLogo={profile?.profileImage || "https://ui-avatars.com/api/?name=Student&background=random"}
        simplified={true}
      />
      <div className="dashboard-content">
        <h2>Welcome, {profile?.name || 'Student'}</h2>
        <div className="dashboard-stats">
          <div className="stat-card aptitude">
            <div className="stat-header">
              <FaCalculator className="stat-icon" />
              <h3>Aptitude Tests</h3>
            </div>
            <div className="stat-details">
              <div className="stat-item">
                <p>Total Tests</p>
                <h4>15</h4>
              </div>
              <div className="stat-item">
                <p>Tests Appeared</p>
                <h4>8</h4>
              </div>
            </div>
          </div>

          <div className="stat-card drives">
            <div className="stat-header">
              <FaBriefcase className="stat-icon" />
              <h3>Placement Drives</h3>
            </div>
            <div className="stat-details">
              <div className="stat-item">
                <p>Total Drives</p>
                <h4>25</h4>
              </div>
              <div className="stat-item">
                <p>Eligible For</p>
                <h4>18</h4>
              </div>
            </div>
          </div>

          <div className="stat-card companies">
            <div className="stat-header">
              <FaBuilding className="stat-icon" />
              <h3>Companies</h3>
            </div>
            <div className="stat-details">
              <div className="stat-item">
                <p>Total Companies</p>
                <h4>42</h4>
              </div>
            </div>
          </div>

          <div className="stat-card sessions">
            <div className="stat-header">
              <FaBook className="stat-icon" />
              <h3>Prep Sessions</h3>
            </div>
            <div className="stat-details">
              <div className="stat-item">
                <p>Total Sessions</p>
                <h4>18</h4>
              </div>
              <div className="stat-item">
                <p>Sessions Attended</p>
                <h4>12</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentDashboard;
