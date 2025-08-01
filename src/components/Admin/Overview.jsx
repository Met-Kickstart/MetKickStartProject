import React from 'react';
import { FaUsers, FaBuilding, FaChartBar, FaCheckCircle, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './Overview.css';

const Overview = () => {
  const stats = [
    {
      icon: <FaUsers />,
      number: '240',
      label: 'Total Students',
      color: '#d32f2f'
    },
    {
      icon: <FaBuilding />,
      number: '15',
      label: 'Active Drives',
      color: '#1e88e5'
    },
    {
      icon: <FaCheckCircle />,
      number: '180',
      label: 'Placed Students',
      color: '#43a047'
    },
    {
      icon: <FaBriefcase />,
      number: '₹8.5L',
      label: 'Average Package',
      color: '#fb8c00'
    }
  ];

  const recentDrives = [
    {
      company: 'Google India',
      role: 'Software Engineer',
      applicants: 142,
      deadline: '2025-08-15'
    },
    {
      company: 'Microsoft',
      role: 'Cloud Engineer',
      applicants: 98,
      deadline: '2025-08-20'
    }
  ];

  return (
    <div className="overview-page">
      <div className="overview-container">
        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-details">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Placement Progress */}
        <div className="overview-card">
          <div className="card-header">
            <FaChartBar size={24} />
            <h3>Placement Progress</h3>
          </div>
          <div className="card-content">
            <div className="progress-stats">
              <div className="progress-item">
                <div className="progress-info">
                  <span>Overall Placement</span>
                  <span>75%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-info">
                  <span>B.Tech Placement</span>
                  <span>82%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '82%' }}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-info">
                  <span>MCA Placement</span>
                  <span>68%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '68%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Drives */}
        <div className="overview-card">
          <div className="card-header">
            <FaBuilding size={24} />
            <h3>Recent Placement Drives</h3>
          </div>
          <div className="card-content">
            <div className="drives-table">
              <table>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Role</th>
                    <th>Applicants</th>
                    <th>Deadline</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentDrives.map((drive, index) => (
                    <tr key={index}>
                      <td>{drive.company}</td>
                      <td>{drive.role}</td>
                      <td>{drive.applicants}</td>
                      <td>{drive.deadline}</td>
                      <td>
                        <span className="status-badge">Active</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;