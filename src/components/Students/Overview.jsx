import React from 'react';
import { FaCalculator, FaBriefcase, FaBuilding, FaBook } from 'react-icons/fa';
import './Overview.css';

const Overview = () => {
  return (
    <div className="dashboard-stats">
      <div className="stat-card aptitude">
        <div className="stat-header">
          <FaCalculator className="stat-icon" />
          <h3>Mock Aptitude Tests</h3>
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
  );
};

export default Overview;
