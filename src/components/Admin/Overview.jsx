import React from 'react';
import { FaUsers, FaUserGraduate, FaBuilding, FaBook, FaCalculator, FaChartBar } from 'react-icons/fa';
import './Overview.css';

const Overview = () => {
  const stats = [
    {
      icon: <FaUsers />,
      number: '240',
      label: 'Total Students',
      color: '#d32f2f'  // Light red
    },
    {
      icon: <FaUserGraduate />,
      number: '180',
      label: 'Placed Students',
      color: '#1e88e5'  // Blue
    },
    {
      icon: <FaBuilding />,
      number: '25',
      label: 'Companies Arrived',
      color: '#43a047'  // Green
    },
    {
      icon: <FaBook />,
      number: '42',
      label: 'Prep Sessions',
      color: '#ffa000'  // Yellow
    },
    {
      icon: <FaCalculator />,
      number: '15',
      label: 'Aptitude Tests',
      color: '#ff5722'  // Orange/Float color
    }
  ];

  const recentDrives = [
    {
      company: "TCS",
      role: "Software Engineer",
      applicants: 45,
      deadline: "2024-09-15",
      status: "Active"
    },
    {
      company: "Infosys",
      role: "Systems Engineer",
      applicants: 38,
      deadline: "2024-09-20",
      status: "Active"
    },
    {
      company: "Microsoft",
      role: "SDE",
      applicants: 52,
      deadline: "2024-09-25",
      status: "Active"
    }
  ];

  return (
    <div className="overview-page">
      <div className="overview-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              className="stat-card" 
              key={index}
              style={{ 
                borderLeft: `4px solid ${stat.color}`,
                background: `${stat.color}08` // Very light version of the color
              }}
            >
              <div className="stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-details">
                <h3 style={{ color: stat.color }}>{stat.number}</h3>
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