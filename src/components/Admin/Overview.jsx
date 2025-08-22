import React from 'react';
import { FaUsers, FaUserGraduate, FaBuilding, FaBook, FaCalculator, FaChartBar } from 'react-icons/fa';
import './Overview.css';

const Overview = () => {
  const stats = [
    {
      icon: <FaUsers />,
      number: '240',
      label: 'Total Students',
      className: 'stat-red'
    },
    {
      icon: <FaUserGraduate />,
      number: '180',
      label: 'Placed Students',
      className: 'stat-blue'
    },
    {
      icon: <FaBuilding />,
      number: '25',
      label: 'Companies Arrived',
      className: 'stat-green'
    },
    {
      icon: <FaBook />,
      number: '42',
      label: 'Prep Sessions',
      className: 'stat-yellow'
    },
    {
      icon: <FaCalculator />,
      number: '15',
      label: 'Aptitude Tests',
      className: 'stat-orange'
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
            <div className={`stat-card ${stat.className}`} key={index}>
              <div className="stat-icon">
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