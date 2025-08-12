import React, { useState, useEffect } from 'react';
import './PlacementDrives.css';

const PlacementDrive = () => {
  const [placements, setPlacements] = useState([]);
  const [filter, setFilter] = useState('nomination');
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
      status: "nomination",
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
      status: "active",
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
      status: "completed",
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
      status: "nomination",
      applicants: 28,
      selected: 0,
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
      status: "active",
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
      status: "completed",
      applicants: 52,
      selected: 14,
      createdDate: "2024-08-18"
    }
  ];

  useEffect(() => {
    setPlacements(demoPlacementData);
  }, []);

  const filteredPlacements = placements.filter(placement => {
    const matchesFilter = filter === 'all' || placement.status.toLowerCase() === filter;
    const matchesSearch = placement.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         placement.position.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status) => {
    const statusLabels = {
      'nomination': 'Open for Nomination',
      'active': 'Active',
      'completed': 'Completed'
    };
    return <span className={`status-badge status-${status}`}>{statusLabels[status]}</span>;
  };

  const getTypeBadge = (type) => {
    return <span className={`type-badge type-${type.toLowerCase().replace(' ', '-')}`}>{type}</span>;
  };

  return (
    <div className="placement-drive-container">
      <div className="page-header">
        <h1>Placement Drives</h1>
        <button className="btn-primary">Add New Drive</button>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card nomination">
          <div className="stat-icon">📝</div>
          <div className="stat-info">
            <h3>{placements.filter(p => p.status === 'nomination').length}</h3>
            <p>Open for Nomination</p>
          </div>
        </div>
        <div className="stat-card active">
          <div className="stat-icon">🚀</div>
          <div className="stat-info">
            <h3>{placements.filter(p => p.status === 'active').length}</h3>
            <p>Active Drives</p>
          </div>
        </div>
        <div className="stat-card completed">
          <div className="stat-icon">✅</div>
          <div className="stat-info">
            <h3>{placements.filter(p => p.status === 'completed').length}</h3>
            <p>Completed Drives</p>
          </div>
        </div>
        <div className="stat-card total">
          <div className="stat-icon">🎯</div>
          <div className="stat-info">
            <h3>{placements.reduce((sum, p) => sum + p.selected, 0)}</h3>
            <p>Total Placed</p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="filters-section">
        <div className="filter-tabs">
          <button 
            className={filter === 'nomination' ? 'active' : ''} 
            onClick={() => setFilter('nomination')}
          >
            Open for Nomination
          </button>
          <button 
            className={filter === 'active' ? 'active' : ''} 
            onClick={() => setFilter('active')}
          >
            Active Drives
          </button>
          <button 
            className={filter === 'completed' ? 'active' : ''} 
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by company or position..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Placement Drives Table */}
      <div className="table-container">
        <table className="placement-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Job Tittle</th>
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
                <td className="package">{placement.package}</td>
                <td>{placement.location}</td>
                <td>{new Date(placement.lastDate).toLocaleDateString()}</td>
                <td>{getStatusBadge(placement.status)}</td>
                <td className="text-center">{placement.applicants}</td>
                <td className="text-center">{placement.selected}</td>
                <td>
                  <div className="action-buttons">
                    <button className="btn-action view" title="View Details">👁️</button>
                    <button className="btn-action edit" title="Edit">✏️</button>
                    <button className="btn-action delete" title="Delete">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredPlacements.length === 0 && (
        <div className="no-data">
          <p>No placement drives found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default PlacementDrive;
