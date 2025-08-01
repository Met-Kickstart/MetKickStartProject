// CreateDrive.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Upload, Building, Mail, Phone, Calendar, MapPin, DollarSign } from "lucide-react";
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
    jobType: "Full-time",
    experience: "Fresher",
    eligibilityCriteria: {
      minCGPA: "",
      maxBacklogs: "",
      graduationYear: "",
    },
    contactEmail: "",
    hrContact: "",
    mbaSpecializations: [],
  });

  const [jdFile, setJdFile] = useState(null);
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
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setJdFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!jdFile) {
      alert("Please upload a Job Description file.");
      return;
    }

    try {
      setLoading(true);
      const data = new FormData();
      data.append("jd_file", jdFile);
      data.append("driveData", JSON.stringify(formData));

      await axios.post("http://localhost:8000/api/drives/", data, {
        headers: { "Content-Type": "multipart/form-data" },
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
                    onChange={(e) => {
                      const { checked, value } = e.target;
                      setFormData((prev) => {
                        const mbaSpecializations = checked
                          ? [...prev.mbaSpecializations, value]
                          : prev.mbaSpecializations.filter((s) => s !== value);
                        return { ...prev, mbaSpecializations };
                      });
                    }}
                  />
                  <span></span>
                  {spec}
                </label>
              ))}
            </div>
            </div>
          </div>

          {/* Job Description Upload Card */}
          <div className="form-card">
            <div className="card-header">
              <Upload size={24} />
              <h3>Job Description Document</h3>
            </div>
            <div className="card-content">
              <div className="file-upload-area">
                <input
                  type="file"
                  id="jd-file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  hidden
                />
                <label htmlFor="jd-file" className="file-upload-label">
                  <div className="upload-icon">
                    <Upload size={32} />
                  </div>
                  <div className="upload-text">
                    <strong>Click to upload</strong> or drag and drop
                    <span>PDF, DOC, DOCX (max 10MB)</span>
                  </div>
                </label>
                {jdFile && (
                  <div className="file-selected">
                    <span>📄 {jdFile.name}</span>
                  </div>
                )}
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
                  <label>
                    <DollarSign size={16} />
                    Salary Package
                  </label>
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

          {/* Contact & Eligibility Card */}
          <div className="form-card">
            <div className="card-header">
              <Mail size={24} />
              <h3>Contact & Eligibility</h3>
            </div>
            <div className="card-content">
              <div className="input-row">
                <div className="input-group">
                  <label>
                    <Mail size={16} />
                    Contact Email
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    placeholder="hr@company.com"
                    required
                  />
                </div>
                <div className="input-group">
                  <label>
                    <Phone size={16} />
                    HR Contact
                  </label>
                  <input
                    type="tel"
                    name="hrContact"
                    value={formData.hrContact}
                    onChange={handleInputChange}
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Minimum CGPA</label>
                  <input
                    type="text"
                    name="eligibilityCriteria.minCGPA"
                    value={formData.eligibilityCriteria.minCGPA}
                    onChange={handleInputChange}
                    placeholder="7.0"
                  />
                </div>
                <div className="input-group">
                  <label>Max Backlogs</label>
                  <input
                    type="text"
                    name="eligibilityCriteria.maxBacklogs"
                    value={formData.eligibilityCriteria.maxBacklogs}
                    onChange={handleInputChange}
                    placeholder="0"
                  />
                </div>
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