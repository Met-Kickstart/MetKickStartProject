import React, { useState, useEffect } from 'react';
import { FaBuilding, FaCheckCircle, FaUsers, FaBullseye, FaFileExcel } from 'react-icons/fa';
import './PlacementDrives.css';

const PlacementDrive = () => {
  const [placements, setPlacements] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Demo placement data
  const demoPlacementData = [
    {
      id: 1,
      companyName: "TCS",
      position: "Software Developer",
      package: "3.5 LPA",
      location: "Mumbai",
      eligibility: "60% in 10th, 12th, B.Tech",
      lastDate: "2024-09-15",
      status: "Active",
      applicants: 45,
      selected: 12,
      createdDate: "2024-08-20"
    },
    {
      id: 2,
      companyName: "Infosys",
      position: "System Engineer",
      package: "4.0 LPA",
      location: "Bangalore",
      eligibility: "65% in academics",
      lastDate: "2024-09-20",
      status: "Active",
      applicants: 62,
      selected: 18,
      createdDate: "2024-08-22"
    },
    {
      id: 3,
      companyName: "Wipro",
      position: "Project Engineer",
      package: "3.8 LPA",
      location: "Pune",
      eligibility: "No backlogs",
      lastDate: "2024-08-30",
      status: "Closed",
      applicants: 38,
      selected: 8,
      createdDate: "2024-08-10"
    },
    {
      id: 4,
      companyName: "Amazon",
      position: "SDE-I",
      package: "12.0 LPA",
      location: "Hyderabad",
      eligibility: "70% in academics, No backlogs",
      lastDate: "2024-10-05",
      status: "Active",
      applicants: 28,
      selected: 5,
      createdDate: "2024-08-25"
    },
    {
      id: 5,
      companyName: "Microsoft",
      position: "Software Engineer Intern",
      package: "45,000/month",
      location: "Remote",
      eligibility: "3rd year students",
      lastDate: "2024-09-10",
      status: "Active",
      applicants: 15,
      selected: 2,
      createdDate: "2024-08-28"
    },
    {
      id: 6,
      companyName: "Cognizant",
      position: "Programmer Analyst",
      package: "4.2 LPA",
      location: "Chennai",
      eligibility: "60% in academics",
      lastDate: "2024-09-25",
      status: "Active",
      applicants: 52,
      selected: 14,
      createdDate: "2024-08-18"
    }
  ];

  useEffect(() => {
    setPlacements(demoPlacementData);
  }, []);

  const stats = [
    {
      icon: <FaBuilding />,
      number: placements.length,
      label: 'Total Drives',
      color: 'var(--stat-red)'
    },
    {
      icon: <FaCheckCircle />,
      number: placements.filter(p => p.status === 'Active').length,
      label: 'Active Drives',
      color: 'var(--stat-green)'
    },
    {
      icon: <FaUsers />,
      number: placements.reduce((sum, p) => sum + p.applicants, 0),
      label: 'Total Applicants',
      color: 'var(--stat-blue)'
    },
    {
      icon: <FaBullseye />,
      number: placements.reduce((sum, p) => sum + p.selected, 0),
      label: 'Total Selected',
      color: 'var(--stat-yellow)'
    }
  ];

  const handleImportExcel = () => {
    alert('Import from Excel functionality would be implemented here');
  };

  const filteredPlacements = placements.filter(placement => {
    const matchesFilter = filter === 'all' || placement.status.toLowerCase() === filter;
    const matchesSearch = placement.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         placement.position.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status) => {
    const statusClass = status === 'Active' ? 'status-active' : 'status-closed';
    return <span className={`status-badge ${statusClass}`}>{status}</span>;
  };

  return (
    <div className="placement-drive-container">
      <div className="page-header">
        <h1>
          <FaBuilding />
          Placement Drives
        </h1>
        <button className="btn-primary" onClick={handleImportExcel}>
          <FaFileExcel /> Import Data from Excel
        </button>
      </div>

      {/* Stats Cards - Updated to match Overview */}
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

      {/* Filters Section */}
      <div className="filters-section">
        <div className="filter-tabs">
          <button
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All Drives
          </button>
          <button
            className={filter === 'active' ? 'active' : ''}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button
            className={filter === 'closed' ? 'active' : ''}
            onClick={() => setFilter('closed')}
          >
            Closed
          </button>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search companies or positions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Table Container */}
      <div className="table-container">
        {filteredPlacements.length > 0 ? (
          <table className="placement-table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Job Title</th>
                <th>CTC</th>
                <th>Location</th>
                <th>Last Date</th>
                <th>Status</th>
                <th>Applicants</th>
                <th>Selected</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPlacements.map((placement) => (
                <tr key={placement.id}>
                  <td>
                    <div className="company-info">
                      <strong>{placement.companyName}</strong>
                    </div>
                  </td>
                  <td>{placement.position}</td>
                  <td>
                    <span className="package">{placement.package}</span>
                  </td>
                  <td>{placement.location}</td>
                  <td>{new Date(placement.lastDate).toLocaleDateString()}</td>
                  <td>{getStatusBadge(placement.status)}</td>
                  <td>{placement.applicants}</td>
                  <td>{placement.selected}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-action view" title="View Details">
                        👁️
                      </button>
                      <button className="btn-action edit" title="Edit">
                        ✏️
                      </button>
                      <button className="btn-action delete" title="Delete">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-data">
            <h3>No placement drives found</h3>
            <p>No placement drives found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlacementDrive;
