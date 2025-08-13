import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Building, Mail, Calendar, MapPin, FileText, ListOrdered, Users } from "lucide-react";
import "./CreateDrive.css";

const CreateDrive = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    location: "",
    driveDate: "",
    applicationDeadline: "",
    CTC: "",
    vacancy: "",
    tenthPercentage: '',
    twelfthPercentage: '',
    graduationCGPA: "",
    firstYearCGPA: "",
    activeBacklogs: "",
    mbaSpecializations: [],
    // Updated rounds structure - first 3 mandatory, rest optional
    mandatoryRounds: ["Shortlist", "Aptitude/Written Test", "Group Discussion"], // Always included
    optionalRounds: [], // User can select from Round 1-4
    jobDescription: ""
  });

  const [loading, setLoading] = useState(false);

  const specializations = [
    "HR",
    "Finance", 
    "Marketing",
    "Operations",
  ];

  // Define optional rounds for selection (Round 1-4)
  const availableOptionalRounds = [
    "Round 1",
    "Round 2", 
    "Round 3",
    "Round 4"
  ];

  const toggleSpecialization = (spec) => {
    setFormData((prev) => ({
      ...prev,
      mbaSpecializations: prev.mbaSpecializations.includes(spec)
        ? prev.mbaSpecializations.filter((s) => s !== spec)
        : [...prev.mbaSpecializations, spec],
    }));
  };

  // New function to toggle optional rounds
  const toggleOptionalRound = (round) => {
    setFormData((prev) => ({
      ...prev,
      optionalRounds: prev.optionalRounds.includes(round)
        ? prev.optionalRounds.filter((r) => r !== round)
        : [...prev.optionalRounds, round],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Combine mandatory and optional rounds for submission
    const finalFormData = {
      ...formData,
      rounds: [...formData.mandatoryRounds, ...formData.optionalRounds]
    };
    
    try {
      setLoading(true);
      await axios.post("http://localhost:8000/api/drives/", finalFormData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Drive created successfully!");
      navigate("/drives");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create drive.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-drive-page">
      <div className="form-container">
        <div className="page-header">
          <div className="header-content">
            <h2>Create A New Placement Drive</h2>
            <p>Fill in the details below to create a new placement opportunity</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="drive-form">
          {/* Company Information Card */}
          <div className="form-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <Building size={24} />
              </div>
              <h3>Company Information</h3>
            </div>
            <div className="card-content">
              <div className="input-row">
                <div className="input-group">
                  <label>
                    <Building size={16} />
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Enter company name"
                    required
                  />
                </div>
                <div className="input-group">
                  <label>
                    <FileText size={16} />
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    placeholder="Enter job title"
                    required
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>
                    <MapPin size={16} />
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter job location"
                    required
                  />
                </div>
                <div className="input-group">
                  <label>
                    <Users size={16} />
                    Vacancy *
                  </label>
                  <input
                    type="number"
                    name="vacancy"
                    value={formData.vacancy}
                    onChange={handleInputChange}
                    placeholder="Enter number of positions"
                    min="1"
                    required
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>
                    <Mail size={16} />
                    CTC (in LPA) *
                  </label>
                  <input
                    type="number"
                    name="CTC"
                    value={formData.CTC}
                    onChange={handleInputChange}
                    placeholder="Enter CTC"
                    required
                  />
                </div>
                <div className="input-group">
                  {/* Empty div to maintain grid layout */}
                </div>
              </div>
            </div>
          </div>

          {/* Drive Schedule Card */}
          <div className="form-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <Calendar size={24} />
              </div>
              <h3>Drive Schedule</h3>
            </div>
            <div className="card-content">
              <div className="input-row">
                <div className="input-group">
                  <label>
                    <Calendar size={16} />
                    Drive Date *
                  </label>
                  <input
                    type="date"
                    name="driveDate"
                    value={formData.driveDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label>
                    <Calendar size={16} />
                    Application Deadline *
                  </label>
                  <input
                    type="date"
                    name="applicationDeadline"
                    value={formData.applicationDeadline}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility Criteria Card */}
          <div className="form-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <FileText size={24} />
              </div>
              <h3>Eligibility Criteria</h3>
            </div>
            <div className="card-content">
              <div className="input-row">
                <div className="input-group">
                  <label>10th Percentage *</label>
                  <input
                    type="number"
                    name="tenthPercentage"
                    value={formData.tenthPercentage}
                    onChange={handleInputChange}
                    placeholder="Enter 10th percentage"
                    required
                  />
                </div>
                <div className="input-group">
                  <label>12th Percentage *</label>
                  <input
                    type="number"
                    name="twelfthPercentage"
                    value={formData.twelfthPercentage}
                    onChange={handleInputChange}
                    placeholder="Enter 12th percentage"
                    required
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Graduation CGPA *</label>
                  <input
                    type="number"
                    step="0.01"
                    name="graduationCGPA"
                    value={formData.graduationCGPA}
                    onChange={handleInputChange}
                    placeholder="Enter graduation CGPA"
                    required
                  />
                </div>
                <div className="input-group">
                  <label>1st Year CGPA *</label>
                  <input
                    type="number"
                    step="0.01"
                    name="firstYearCGPA"
                    value={formData.firstYearCGPA}
                    onChange={handleInputChange}
                    placeholder="Enter 1st year CGPA"
                    required
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Active Backlogs *</label>
                  <select
                    name="activeBacklogs"
                    value={formData.activeBacklogs}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select backlog status</option>
                    <option value="0">No Backlogs</option>
                    <option value="1">1 Backlog</option>
                    <option value="2">2 Backlogs</option>
                    <option value="3+">3+ Backlogs</option>
                  </select>
                </div>
                <div className="input-group">
                  {/* Empty div to maintain grid layout */}
                </div>
              </div>
              <div className="input-group">
                <label>MBA Specializations Required</label>
                <div className="specialization-container">
                  {specializations.map((spec) => (
                    <label key={spec} className="spec-checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.mbaSpecializations.includes(spec)}
                        onChange={() => toggleSpecialization(spec)}
                      />
                      <span></span>
                      {spec}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Selection Process Card */}
          <div className="form-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <ListOrdered size={24} />
              </div>
              <h3>Selection Process</h3>
            </div>
            <div className="card-content">
              {/* Mandatory Rounds Section */}
              <div className="input-group">
                <label>Mandatory Selection Rounds</label>
                <div className="mandatory-rounds-info">
                  <p className="rounds-description">
                    The following rounds are mandatory for all placement drives:
                  </p>
                  <div className="mandatory-rounds-list">
                    {formData.mandatoryRounds.map((round, index) => (
                      <div key={index} className="mandatory-round-item">
                        <span className="round-number">{index + 1}</span>
                        <span className="round-name">{round}</span>
                        <span className="mandatory-badge">Mandatory</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Optional Rounds Section */}
              <div className="input-group">
                <label>Additional Rounds (Optional)</label>
                <p className="rounds-description">
                  Select additional rounds if required for this placement drive:
                </p>
                <div className="specialization-container">
                  {availableOptionalRounds.map((round) => (
                    <label key={round} className="spec-checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.optionalRounds.includes(round)}
                        onChange={() => toggleOptionalRound(round)}
                      />
                      <span></span>
                      {round}
                    </label>
                  ))}
                </div>
              </div>

              <div className="input-group">
                <label>
                  <FileText size={16} />
                  Job Description *
                </label>
                <textarea
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleInputChange}
                  placeholder="Enter detailed job description..."
                  required
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate("/drives")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Drive"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDrive;