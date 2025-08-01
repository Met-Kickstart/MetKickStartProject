import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminMenu from '../components/Admin/AdminMenu';
import CreatePlacementDrive from '../components/Admin/CreatePlacementDrive';
import Overview from '../components/Admin/Overview';
import StudentManagement from '../components/Admin/StudentManagement';
import { FaUsers, FaBuilding, FaChartBar, FaCheckCircle } from 'react-icons/fa';
import './AdminDashboard.css';

const AdminDashboard = ({ onLogout }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [drives, setDrives] = useState([
    {
      id: 1,
      company: 'Google India',
      role: 'Software Engineer',
      deadline: '2025-08-15',
      status: 'Active',
      applicants: 142
    },
    {
      id: 2,
      company: 'Microsoft',
      role: 'Cloud Engineer',
      deadline: '2025-08-20',
      status: 'Active',
      applicants: 98
    }
  ]);

  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'John Doe',
      course: 'B.Tech',
      year: '2025',
      status: 'Placed'
    },
    {
      id: 2,
      name: 'Jane Smith',
      course: 'MCA',
      year: '2025',
      status: 'Not Placed'
    }
  ]);

  const handleLogout = () => {
    // Call the onLogout function passed from App.jsx
    onLogout();
    // Navigate to welcome page
    navigate('/');
  };

  // Add handlers for other buttons
  const handleEditStudent = (studentId) => {
    // Add edit student logic
    console.log('Editing student:', studentId);
  };

  const handleEditDrive = (driveId) => {
    // Add edit drive logic
    console.log('Editing drive:', driveId);
  };

  const handleAddStudent = (event) => {
    event.preventDefault();
    // Add new student logic
    console.log('Adding new student');
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return <Overview />;
      
      case 'student-management':
        return <StudentManagement setActiveTab={setActiveTab} />;
      
      case 'create-drive':
        return <CreatePlacementDrive />;
      
      case 'placement-drives':
        return (
          <div className="drives-section">
            <h2>Active Placement Drives</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--light-gray)' }}>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Company</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Role</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Deadline</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Status</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Applicants</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {drives.map(drive => (
                  <tr key={drive.id} style={{ borderBottom: '1px solid var(--light-gray)' }}>
                    <td style={{ padding: '1rem' }}>{drive.company}</td>
                    <td style={{ padding: '1rem' }}>{drive.role}</td>
                    <td style={{ padding: '1rem' }}>{drive.deadline}</td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        backgroundColor: 'var(--success)',
                        color: 'white'
                      }}>
                        {drive.status}
                      </span>
                    </td>
                    <td style={{ padding: '1rem' }}>{drive.applicants}</td>
                    <td style={{ padding: '1rem' }}>
                      <button style={{
                        padding: '0.5rem',
                        marginRight: '0.5rem',
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }} onClick={() => handleEditDrive(drive.id)}>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'statistics':
        return (
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
        );

      case 'alumni':
        return (
          <div className="alumni-section">
            <h2>Alumni Network</h2>
            <div className="alumni-grid">
              {/* Add alumni content */}
            </div>
          </div>
        );

      default:
        return <Overview />;
    }
  };

  return (
    <div className="admin-dashboard">
      <Header 
        isLoggedIn={true} 
        onLogoutClick={handleLogout} 
        profileLogo="https://ui-avatars.com/api/?name=Admin&background=random" 
      />
      
      <div className="dashboard-container">
        <AdminMenu activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="dashboard-content">
          {renderContent()}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;