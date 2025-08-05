import React, { useState } from 'react';
import { Upload, Building, Mail, Phone, BookOpen, GraduationCap, Percent, Linkedin, Globe, User, FileText } from 'lucide-react';
import { FaGooglePlay } from 'react-icons/fa';
import './CompleteProfile.css';

const CompleteProfile = ({ onProfileComplete }) => {
  const [profile, setProfile] = useState({
    placementPreferences: {
      interestedInPlacements: false,
      willingToRelocate: false
    },
    ojt: {
      companyName: '',
      projectTitle: '',
      joiningDate: '',
      companyGuide: {
        name: '',
        contactNo: '',
        emailId: ''
      },
      collegeGuideName: ''
    },
    linkedinUrl: '',
    resumeFile: null
  });

  const [linkedinVerified, setLinkedinVerified] = useState(false);
  const [verifyingLinkedin, setVerifyingLinkedin] = useState(false);
  const [error, setError] = useState('');

  const graduationStreams = [
    'Computer Science',
    'Information Technology',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electronics Engineering',
    'Commerce',
    'Science',
    'Arts',
    'Other'
  ];

  const degrees = [
    'B.Tech',
    'B.E.',
    'BCA',
    'B.Sc',
    'B.Com',
    'BA',
    'Other'
  ];

  const verifyLinkedinUrl = async () => {
    setVerifyingLinkedin(true);
    setError('');

    // LinkedIn URL format validation
    const linkedinRegex = /^https:\/\/[w]{0,3}\.?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
    if (!linkedinRegex.test(profile.linkedinUrl)) {
      setError('Please enter a valid LinkedIn profile URL (e.g., https://linkedin.com/in/username)');
      setVerifyingLinkedin(false);
      return;
    }

    try {
      // Here you would typically make an API call to verify the LinkedIn profile
      // For demo purposes, we're just simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLinkedinVerified(true);
      setError('');
    } catch (err) {
      setError('Could not verify LinkedIn profile. Please check the URL and try again.');
      setLinkedinVerified(false);
    } finally {
      setVerifyingLinkedin(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setProfile(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setProfile(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if file is PDF
      if (file.type !== 'application/pdf') {
        setError('Please upload only PDF files');
        e.target.value = ''; // Reset file input
        return;
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('File size should not exceed 5MB');
        e.target.value = ''; // Reset file input
        return;
      }

      setProfile(prev => ({
        ...prev,
        resumeFile: file
      }));
      setError(''); // Clear any existing errors
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateProfile()) {
      onProfileComplete(profile);
    }
  };

  const validateProfile = () => {
    // Remove validation for basic info and academics
    if (!profile.placementPreferences.interestedInPlacements) {
      setError('Please indicate your interest in placements');
      return false;
    }
    if (!profile.linkedinUrl) {
      setError('Please add and verify your LinkedIn profile');
      return false;
    }
    if (!profile.resumeFile) {
      setError('Please upload your resume');
      return false;
    }
    return true;
  };

  return (
    <div className="create-drive-page">
      <div className="form-container">
        <div className="page-header">
          <div className="header-content">
            <h2>Complete Your Profile</h2>
            <p>Please fill in your details to access the placement portal</p>
          </div>
        </div>

        <form className="drive-form" onSubmit={handleSubmit}>
          {/* Placement Preferences Card */}
          <div className="form-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <Building size={24} />
              </div>
              <h3>Placement Preferences</h3>
            </div>
            <div className="card-content">
              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="placementPreferences.interestedInPlacements"
                    checked={profile.placementPreferences.interestedInPlacements}
                    onChange={(e) => {
                      const { name, checked } = e.target;
                      setProfile(prev => ({
                        ...prev,
                        placementPreferences: {
                          ...prev.placementPreferences,
                          interestedInPlacements: checked
                        }
                      }));
                    }}
                  />
                  Are you interested in Campus Placements Opportunities?
                </label>
              </div>
              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="placementPreferences.willingToRelocate"
                    checked={profile.placementPreferences.willingToRelocate}
                    onChange={(e) => {
                      const { name, checked } = e.target;
                      setProfile(prev => ({
                        ...prev,
                        placementPreferences: {
                          ...prev.placementPreferences,
                          willingToRelocate: checked
                        }
                      }));
                    }}
                  />
                  Are you willing to relocate for job opportunities in cities like Pune, Mumbai, etc.?
                </label>
              </div>
            </div>
          </div>

          {/* OJT Details Card */}
          <div className="form-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <Building size={24} />
              </div>
              <h3>OJT Details</h3>
            </div>
            <div className="card-content">
              <div className="input-row">
                <div className="input-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="ojt.companyName"
                    value={profile.ojt.companyName}
                    onChange={handleChange}
                    placeholder="Enter OJT company name"
                    required
                  />
                </div>
                <div className="input-group">
                  <label>Project Title</label>
                  <input
                    type="text"
                    name="ojt.projectTitle"
                    value={profile.ojt.projectTitle}
                    onChange={handleChange}
                    placeholder="Enter OJT project title"
                    required
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Joining Date</label>
                  <input
                    type="date"
                    name="ojt.joiningDate"
                    value={profile.ojt.joiningDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Company Guide Name</label>
                  <input
                    type="text"
                    name="ojt.companyGuide.name"
                    value={profile.ojt.companyGuide.name}
                    onChange={handleChange}
                    placeholder="Enter company guide name"
                    required
                  />
                </div>
                <div className="input-group">
                  <label>Company Guide Contact No</label>
                  <input
                    type="tel"
                    name="ojt.companyGuide.contactNo"
                    value={profile.ojt.companyGuide.contactNo}
                    onChange={handleChange}
                    placeholder="Enter company guide contact"
                    required
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Company Guide Email ID</label>
                  <input
                    type="email"
                    name="ojt.companyGuide.emailId"
                    value={profile.ojt.companyGuide.emailId}
                    onChange={handleChange}
                    placeholder="Enter company guide email"
                    required
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>College Guide Name</label>
                  <input
                    type="text"
                    name="ojt.collegeGuideName"
                    value={profile.ojt.collegeGuideName}
                    onChange={handleChange}
                    placeholder="Enter college guide name"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* LinkedIn Profile Card */}
          <div className="form-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <Linkedin size={24} />
              </div>
              <h3>LinkedIn Profile</h3>
            </div>
            <div className="card-content">
              <div className="input-row linkedin-row">
                <div className="input-group">
                  <label>
                    <Linkedin size={20} />
                    LinkedIn Profile URL
                  </label>
                  <div className="linkedin-input-group">
                    <input
                      type="url"
                      name="linkedinUrl"
                      value={profile.linkedinUrl}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/username"
                      className={linkedinVerified ? 'verified' : ''}
                      required
                    />
                    <button
                      type="button"
                      className={`verify-btn ${linkedinVerified ? 'verified' : ''}`}
                      onClick={verifyLinkedinUrl}
                      disabled={verifyingLinkedin || !profile.linkedinUrl}
                    >
                      {verifyingLinkedin ? 'Verifying...' : linkedinVerified ? 'Verified ✓' : 'Verify'}
                    </button>
                  </div>
                  {linkedinVerified && (
                    <span className="verification-success">LinkedIn profile verified successfully!</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Resume Building Instructions Card - Moved before Resume Upload */}
          <div className="form-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <FileText size={24} />
              </div>
              <h3>Resume Building Instructions</h3>
            </div>
            <div className="card-content">
              <div className="instructions-list">
                <ol>
                  <li>
                    Download the Professional Resume Builder App:
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.hightech.professionalresumes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="app-link"
                    >
                      <FaGooglePlay /> Get Resume Builder App
                    </a>
                  </li>
                  <li>Open the app and select <span className="template-highlight">Template #6</span></li>
                  <li>Set the accent color to <span className="color-preview">Dark Red</span></li>
                  <li>Fill in your details in the following sections:
                    <ul className="resume-sections">
                      <li>Personal Information</li>
                      <li>Education Details</li>
                      <li>Skills & Expertise</li>
                      <li>Projects/Internships</li>
                      <li>Achievements & Certifications</li>
                      <li>Extra-curricular Activities</li>
                    </ul>
                  </li>
                  <li>Review and download your resume in PDF format</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Resume Upload Card - Moved after instructions */}
          <div className="form-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <Upload size={24} />
              </div>
              <h3>Resume Upload</h3>
            </div>
            <div className="card-content">
              <div className="file-upload-area">
                <input
                  type="file"
                  id="resumeFile"
                  name="resumeFile"
                  onChange={handleFileChange}
                  accept=".pdf" // Changed to accept only PDF files
                  style={{ display: 'none' }}
                />
                <label htmlFor="resumeFile" className="upload-label">
                  <Upload size={32} className="upload-icon" />
                  <p>Click to upload your resume (PDF only)</p>
                </label>
              </div>
              {profile.resumeFile && (
                <div className="file-selected">
                  Selected file: {profile.resumeFile.name}
                </div>
              )}
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}
          
          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Complete Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfile;