import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { 
  Building,
  Mail,
  Calendar,
  MapPin,
  FileText,
  ListOrdered 
} from "lucide-react";
import "./CreateDrive.css";

const CreateDrive = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    location: "",
    driveDate: "",
    applicationDeadline: "",
    salary: "",
    tenthPercentage: '',
    twelfthPercentage: '',
    graduationCGPA: "",
    minCGPA: "",
    activeBacklogs: "",
    mbaSpecializations: [],
    rounds: "",
    jobDescription: ""
  });

  const [loading, setLoading] = useState(false);
  const specializations = [
    "HR",
    "Finance",
    "Marketing",
    "Operations",
  ];

  const toggleSpecialization = (spec) => {
    setFormData((prev) => ({
      ...prev,
      mbaSpecializations: prev.mbaSpecializations.includes(spec)
        ? prev.mbaSpecializations.filter((s) => s !== spec)
        : [...prev.mbaSpecializations, spec],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      
      await axios.post("http://localhost:8000/api/drives/", formData, {
        headers: { "Content-Type": "application/json" },
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
        <form onSubmit={handleSubmit} className="drive-form">
          {/* Company Information Card */}
          <div className="form-card">
            <div className="card-header">
              <Building size={24} />
              <h3>Company Information</h3>
            </div>
            <div className="card-content">
              <div className="input-group">
                <label>Company Name</label>
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
                <label>Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="e.g., Business Analyst"
                  required
                />
              </div>
            </div>
          </div>

          {/* Specializations Card */}
          <div className="form-card">
            <div className="card-header">
              <h3>MBA Specialization Required</h3>
            </div>
            <div className="card-content">
              <div className="specialization-container">
                {specializations.map((spec) => (
                  <label key={spec} className="spec-checkbox-label">
                    <input
                      type="checkbox"
                      name="mbaSpecializations"
                      value={spec}
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

          {/* Job Description Card */}
          <div className="form-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <FileText size={24} />
              </div>
              <h3>Job Description</h3>
            </div>
            <div className="card-content">
              <div className="input-group">
                <label>Detailed Job Description</label>
                <textarea
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleInputChange}
                  placeholder="Enter detailed job description, responsibilities, and requirements..."
                  rows="6"
                  required
                />
              </div>
            </div>
          </div>

          {/* Drive Details Card */}
          <div className="form-card">
            <div className="card-header">
              <Calendar size={24} />
              <h3>Drive Details</h3>
            </div>
            <div className="card-content">
              <div className="input-row">
                <div className="input-group">
                  <label>
                    <MapPin size={16} />
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Mumbai, Delhi, etc."
                    required
                  />
                </div>
                <div className="input-group">
                  <label>
                    <Calendar size={16} />
                    Drive Date
                  </label>
                  <input
                    type="date"
                    name="driveDate"
                    value={formData.driveDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Application Deadline</label>
                  <input
                    type="date"
                    name="applicationDeadline"
                    value={formData.applicationDeadline}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label>Salary Package</label>
                  <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    placeholder="e.g., 8-12 LPA"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility Card */}
          <div className="form-card">
            <div className="card-header">
              <Mail size={24} />
              <h3>Eligibility</h3>
            </div>
            <div className="card-content">
              <div className="input-row">
                <div className="input-group">
                  <label>10th Percentage</label>
                  <input
                    type="text"
                    name="tenthPercentage"
                    value={formData.tenthPercentage}
                    onChange={handleInputChange}
                    placeholder="e.g., 85"
                  />
                </div>
                <div className="input-group">
                  <label>12th Percentage</label>
                  <input
                    type="text"
                    name="twelfthPercentage"
                    value={formData.twelfthPercentage}
                    onChange={handleInputChange}
                    placeholder="e.g., 80"
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Graduation CGPA</label>
                  <input
                    type="text"
                    name="graduationCGPA"
                    value={formData.graduationCGPA}
                    onChange={handleInputChange}
                    placeholder="e.g., 7.5"
                  />
                </div>
                <div className="input-group">
                  <label>Minimum CGPA</label>
                  <input
                    type="text"
                    name="minCGPA"
                    value={formData.minCGPA}
                    onChange={handleInputChange}
                    placeholder="e.g., 7.0"
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Active Backlogs</label>
                  <input
                    type="text"
                    name="activeBacklogs"
                    value={formData.activeBacklogs}
                    onChange={handleInputChange}
                    placeholder="e.g., 0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Rounds Card */}
          <div className="form-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <ListOrdered size={24} />
              </div>
              <h3>Selection Process</h3>
            </div>
            <div className="card-content">
              <div className="input-group">
                <label>Selection Rounds</label>
                <textarea
                  name="rounds"
                  value={formData.rounds}
                  onChange={handleInputChange}
                  placeholder="Describe the selection process rounds (e.g., 1. Aptitude Test, 2. Technical Interview, 3. HR Round)"
                  rows="4"
                  required
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="form-actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate("/drives")}
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Creating..." : "Create Drive"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDrive;