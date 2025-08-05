import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompleteProfile from '../components/Students/CompleteProfile';
import { FaBriefcase, FaCheckCircle, FaClock } from 'react-icons/fa';
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
        <div className="welcome-section">
          <h1>Welcome, {profile.name}!</h1>
          <p>Your placement journey starts here</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-header">
              <FaBriefcase />
              <h3>Active Drives</h3>
            </div>
            <div className="card-content">
              <p className="stat-number">5</p>
              <p className="stat-label">Open Opportunities</p>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <FaCheckCircle />
              <h3>Applications</h3>
            </div>
            <div className="card-content">
              <p className="stat-number">3</p>
              <p className="stat-label">Drives Applied</p>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <FaClock />
              <h3>Upcoming</h3>
            </div>
            <div className="card-content">
              <p className="stat-number">2</p>
              <p className="stat-label">Scheduled Interviews</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default StudentDashboard;
