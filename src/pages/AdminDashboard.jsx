import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header                from '../components/Header';
import Footer                from '../components/Footer';
import AdminMenu             from '../components/Admin/AdminMenu';
import Overview              from '../components/Admin/Overview';
import StudentManagement     from '../components/Admin/StudentManagement';
import CreatePlacementDrive  from '../components/Admin/CreatePlacementDrive';
import EmailNotification     from '../components/Admin/EmailNotification';

import './AdminDashboard.css';

const AdminDashboard = ({ onLogout }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  /* ------------------------------------------------------------------ */
  /*  sample static data (unchanged)                                    */
  /* ------------------------------------------------------------------ */
  const [drives] = useState([
    { id: 1, company: 'Google India', role: 'Software Engineer', deadline: '2025-08-15', status: 'Active', applicants: 142 },
    { id: 2, company: 'Microsoft',    role: 'Cloud Engineer',    deadline: '2025-08-20', status: 'Active', applicants: 98  }
  ]);

  /* ------------------------------------------------------------------ */
  /*  handlers                                                          */
  /* ------------------------------------------------------------------ */
  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const handleEditDrive = id => console.log('Editing drive:', id);

  /* ------------------------------------------------------------------ */
  /*  UI                                                                */
  /* ------------------------------------------------------------------ */
  return (
    <div className="admin-dashboard">
      <Header
        isLoggedIn
        onLogoutClick={handleLogout}
        profileLogo="https://ui-avatars.com/api/?name=Admin&background=random"
      />

      <div className="dashboard-container">
        <AdminMenu activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="dashboard-content">
          {/* Overview */}
          {activeTab === 'overview' && <Overview />}

          {/* Student Management */}
          {activeTab === 'student-management' && (
            <StudentManagement setActiveTab={setActiveTab} />
          )}

          {/* Create Drive */}
          {activeTab === 'create-drive' && <CreatePlacementDrive />}

          {/* Placement Drives */}
          {activeTab === 'placement-drives' && (
            <PlacementDrives
              drives={drives}
              onEditDrive={handleEditDrive}
            />
          )}

          {/* Statistics (static demo) */}
          {activeTab === 'statistics' && (
            <div className="statistics-section">
              <h2>Placement Statistics</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>Placement Rate</h3>
                  <div className="stat-value">85%</div>
                </div>
                <div className="stat-card">
                  <h3>Average Package</h3>
                  <div className="stat-value">₹8.5 LPA</div>
                </div>
                <div className="stat-card">
                  <h3>Highest Package</h3>
                  <div className="stat-value">₹24 LPA</div>
                </div>
              </div>
            </div>
          )}


          {/* ★ Email Notification */}
          {activeTab === 'email-notification' && (
            <EmailNotification setActiveTab={setActiveTab} />
          )}
          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
