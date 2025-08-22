import React, { useState, useEffect } from 'react';
import { FaBuilding, FaCheckCircle, FaUsers, FaBullseye, FaFileExcel, FaUpload, FaTimes, FaEye, FaChevronDown } from 'react-icons/fa';
import './PlacementDrives.css';

// Change component name from PlacementDrive to PlacementDrives
const PlacementDrives = () => {
  const [placements, setPlacements] = useState([]);
  const [filter, setFilter] = useState('nomination');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDrive, setSelectedDrive] = useState(null);
  const [showManageModal, setShowManageModal] = useState(false);
  const [selectedRound, setSelectedRound] = useState('');
  const [uploadFile, setUploadFile] = useState(null);
  const [isFinalRound, setIsFinalRound] = useState(false);
  const [roundWiseData, setRoundWiseData] = useState({});
  const [loading, setLoading] = useState(false);

  // Demo placement data with updated rounds structure
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
      createdDate: "2024-08-20",
      rounds: ["Shortlist", "Aptitude/Written Test", "Group Discussion", "Round 1", "Round 2"]
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
      createdDate: "2024-08-22",
      rounds: ["Shortlist", "Aptitude/Written Test", "Group Discussion", "Round 1"]
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
      createdDate: "2024-08-10",
      rounds: ["Shortlist", "Aptitude/Written Test", "Group Discussion", "Round 1", "Round 2", "Round 3"]
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
    // Add null check for demoPlacementData
    if (demoPlacementData && demoPlacementData.length > 0) {
      setPlacements(demoPlacementData);
      // Initialize round-wise data
      const initialRoundData = {};
      demoPlacementData.forEach(drive => {
        if (drive.rounds) {  // Add check for rounds property
          initialRoundData[drive.id] = {};
          drive.rounds.forEach(round => {
            initialRoundData[drive.id][round] = { passed: 0, students: [] };
          });
        }
      });
      setRoundWiseData(initialRoundData);
    }
  }, []);

  const stats = [
    {
      icon: <FaBuilding />,
      value: placements.length,
      label: "Total Drives",
      color: "var(--stat-red)"
    },
    {
      icon: <FaCheckCircle />,
      value: placements.filter(p => p.status === "Active").length,
      label: "Active Drives",
      color: "var(--stat-green)"
    },
    {
      icon: <FaUsers />,
      value: placements.reduce((sum, p) => sum + p.applicants, 0),
      label: "Total Applicants",
      color: "var(--stat-blue)"
    },
    {
      icon: <FaBullseye />,
      value: placements.reduce((sum, p) => sum + p.selected, 0),
      label: "Total Placed",
      color: "var(--stat-yellow)"
    }
  ];

  // Filter placements based on selected filter
  const filteredPlacements = placements.filter(placement => {
    const matchesFilter = filter === 'all' || placement.status.toLowerCase() === filter.toLowerCase();
    const matchesSearch = placement.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         placement.position.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status) => {
    const statusClass = status === 'Active' ? 'status-active' : 'status-closed';
    return <span className={`status-badge ${statusClass}`}>{status}</span>;
  };

  const handleDriveClick = (drive) => {
    setSelectedDrive(drive);
    setShowManageModal(true);
    setSelectedRound('');
    setIsFinalRound(false);
    setUploadFile(null);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel')) {
      setUploadFile(file);
    } else {
      alert('Please upload a valid Excel file (.xlsx or .xls)');
      e.target.value = '';
    }
  };

  const handleUploadSubmit = async () => {
    if (!uploadFile || !selectedRound || !selectedDrive) {
      alert('Please select a round and upload a file');
      return;
    }

    setLoading(true);
    
    try {
      const formData = new FormData();
      formData.append('file', uploadFile);
      formData.append('drive_id', selectedDrive.id.toString());
      formData.append('round_name', selectedRound);
      formData.append('final_round', isFinalRound);

      const response = await fetch('http://localhost:8000/upload-round/', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      
      if (response.ok) {
        alert(`Successfully uploaded students for ${selectedRound}!`);
        // Update local state
        setRoundWiseData(prev => ({
          ...prev,
          [selectedDrive.id]: {
            ...prev[selectedDrive.id],
            [selectedRound]: {
              ...prev[selectedDrive.id][selectedRound],
              uploaded: true
            }
          }
        }));
        // Reset form
        setUploadFile(null);
        setSelectedRound('');
        setIsFinalRound(false);
        document.getElementById('excel-upload').value = '';
      } else {
        alert(`Error: ${result.error || 'Upload failed'}`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Network error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowManageModal(false);
    setSelectedDrive(null);
    setSelectedRound('');
    setIsFinalRound(false);
    setUploadFile(null);
  };

  const handleExport = () => {
    console.log('Exporting data...');
  };

  return (
    <div className="placement-drive-container">
      {/* Header */}
      <div className="page-header">
        <h1>
          <FaBuilding />
          Placement Drives
        </h1>
        <button className="btn-primary" onClick={handleExport}>
          <FaFileExcel />
          Export Data
        </button>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <FaBuilding className="icon-red" />
          </div>
          <div className="stat-info">
            <h3>{placements.length}</h3>
            <p>Total Drives</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FaCheckCircle className="icon-blue" />
          </div>
          <div className="stat-info">
            <h3>{placements.filter(p => p.status === 'Active').length}</h3>
            <p>Active Drives</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FaUsers className="icon-green" />
          </div>
          <div className="stat-info">
            <h3>{placements.reduce((sum, p) => sum + p.applicants, 0)}</h3>
            <p>Total Applicants</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FaBullseye className="icon-yellow" />
          </div>
          <div className="stat-info">
            <h3>{placements.reduce((sum, p) => sum + p.selected, 0)}</h3>
            <p>Total Selected</p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
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
      </div>

      {/* Drive Cards Grid */}
      <div className="drives-grid">
        {filteredPlacements.length > 0 ? (
          filteredPlacements.map((drive) => (
            <div 
              key={drive.id} 
              className="drive-card"
              onClick={() => handleDriveClick(drive)}
            >
              <div className="drive-card-header">
                <div className="company-info">
                  <h3>{drive.companyName}</h3>
                  <p>{drive.position}</p>
                </div>
                {getStatusBadge(drive.status)}
              </div>
              
              <div className="drive-card-content">
                <div className="info-item">
                  <span className="label">Package:</span>
                  <span className="value package-value">{drive.package}</span>
                </div>
                <div className="info-item">
                  <span className="label">Location:</span>
                  <span className="value">{drive.location}</span> 
                </div>
                <div className="info-item">
                  <span className="label">Last Date:</span>
                  <span className="value">{new Date(drive.lastDate).toLocaleDateString()}</span>
                </div>
                <div className="info-item">
                  <span className="label">Applicants:</span>
                  <span className="value">{drive.applicants}</span>
                </div>
                <div className="info-item">
                  <span className="label">Selected:</span>
                  <span className="value">{drive.selected}</span>
                </div>
              </div>
              
              <div className="drive-card-footer">
                <button className="manage-btn">
                  <FaUsers /> Manage Rounds
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-data">
            <h3>No placement drives found</h3>
            <p>No placement drives found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Manage Rounds Modal */}
      {showManageModal && selectedDrive && (
        <div className="modal-overlay">
          <div className="manage-modal">
            <div className="modal-header">
              <h2>Manage Rounds - {selectedDrive.companyName}</h2>
              <button className="close-btn" onClick={closeModal}>
                <FaTimes />
              </button>
            </div>
            
            <div className="modal-content">
              {/* Upload Section */}
              <div className="upload-section">
                <h3>Upload Round Results</h3>
                
                {/* Round-wise Data Section */}
                <div className="rounds-progress">
                  {selectedDrive && selectedDrive.rounds.map((round) => (
                    <div key={round} className="round-status">
                      <span className="round-name">{round}</span>
                      <span className="round-count">
                        {roundWiseData[selectedDrive.id]?.[round]?.passed || 0} students
                      </span>
                    </div>
                  ))}
                </div>

                {/* Company Selection (Read-only) */}
                <div className="form-group">
                  <label>Company</label>
                  <input 
                    type="text" 
                    value={selectedDrive.companyName} 
                    readOnly 
                    className="readonly-input"
                  />
                </div>

                {/* Round Selection Dropdown */}
                <div className="form-group">
                  <label>Select Round *</label>
                  <div className="dropdown-wrapper">
                    <select
                      value={selectedRound}
                      onChange={(e) => setSelectedRound(e.target.value)}
                      className="round-dropdown"
                      required
                    >
                      <option value="">Choose a round...</option>
                      {selectedDrive.rounds.map((round, index) => (
                        <option key={index} value={round}>
                          {round}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown className="dropdown-icon" />
                  </div>
                </div>

                {/* Final Round Checkbox */}
                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={isFinalRound}
                      onChange={(e) => setIsFinalRound(e.target.checked)}
                    />
                    <span className="checkmark"></span>
                    Is this the final round?
                  </label>
                </div>

                {/* File Upload */}
                <div className="form-group">
                  <label>Upload Excel File *</label>
                  <div className="file-upload-area">
                    <input
                      type="file"
                      accept=".xlsx,.xls"
                      onChange={handleFileUpload}
                      id="excel-upload"
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="excel-upload" className="upload-label">
                      <FaFileExcel className="upload-icon" />
                      <div className="upload-text">
                        <strong>Click to upload Excel file</strong>
                        <span>Excel files (.xlsx, .xls) only</span>
                        <span>First column should contain student email addresses</span>
                      </div>
                    </label>
                  </div>
                  {uploadFile && (
                    <div className="file-selected">
                      <span>✓ Selected file: {uploadFile.name}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="form-group">
                  <button 
                    className="btn-submit"
                    onClick={handleUploadSubmit}
                    disabled={!selectedRound || !uploadFile || loading}
                  >
                    {loading ? 'Uploading...' : 'Submit Round Results'}
                  </button>
                </div>

                {/* Expected Format Info */}
                <div className="expected-format">
                  <h4>Expected Excel Format:</h4>
                  <p><strong>Column A:</strong> Student Email Addresses</p>
                  <p>Note: Only students listed in the Excel file will be marked as passed for this round.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Change export name to match component name
export default PlacementDrives;