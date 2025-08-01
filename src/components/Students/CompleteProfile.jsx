import React, { useState } from 'react';
import { Upload, Building, Mail, Phone, BookOpen, GraduationCap, Percent, Linkedin, Globe, User } from 'lucide-react';
import './CompleteProfile.css';

const CompleteProfile = ({ onProfileComplete }) => {
  const [profile, setProfile] = useState({
    rollNo: '',
    fullName: '',
    contactNo: '',
    officialEmail: '',
    personalEmail: '',
    academics: {
      tenthPercentage: '',
      twelfthPercentage: '',
      graduationStream: '',
      graduationDegree: '',
      university: '',
      graduationCGPA: '',
      mbaFirstYearCGPA: '',
      mbaSpecialization: ''
    },
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
    }
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
      setProfile(prev => ({
        ...prev,
        resumeFile: file
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateProfile()) {
      onProfileComplete(profile);
    }
  };

  const validateProfile = () => {
    const requiredFields = [
      'name', 'email', 'phone', 'tenthMarks', 
      'twelfthMarks', 'graduationDetails', 'graduationPercentage'
      // Remove currentSemester and currentCGPA from here
    ];
    
    for (const field of requiredFields) {
      if (!profile[field]) {
        setError(`Please fill in your ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        return false;
      }
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
          {/* Basic Information Card */}
          <div className="form-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <User size={24} />
              </div>
              <h3>Basic Information</h3>
            </div>
            <div className="card-content">
              <div className="input-row">
                <div className="input-group">
                  <label>Roll No</label>
                  <input
                    type="text"
                    name="rollNo"
                    value={profile.rollNo}
                    onChange={handleChange}
                    placeholder="Enter roll number"
                    required
                  />
                </div>
                <div className="input-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={profile.fullName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    required
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Contact No</label>
                  <input
                    type="tel"
                    name="contactNo"
                    value={profile.contactNo}
                    onChange={handleChange}
                    placeholder="Enter contact number"
                    required
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Official Email ID</label>
                  <input
                    type="email"
                    name="officialEmail"
                    value={profile.officialEmail}
                    onChange={handleChange}
                    placeholder="Enter official email"
                    required
                  />
                </div>
                <div className="input-group">
                  <label>Personal Email ID</label>
                  <input
                    type="email"
                    name="personalEmail"
                    value={profile.personalEmail}
                    onChange={handleChange}
                    placeholder="Enter personal email"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Academic Details Card */}
          <div className="form-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <GraduationCap size={24} />
              </div>
              <h3>Academic Details</h3>
            </div>
            <div className="card-content">
              <div className="input-row">
                <div className="input-group">
                  <label>10th Percentage</label>
                  <input
                    type="number"
                    name="academics.tenthPercentage"
                    value={profile.academics.tenthPercentage}
                    onChange={handleChange}
                    placeholder="Enter 10th percentage"
                    step="0.01"
                    min="0"
                    max="100"
                    required
                  />
                </div>
                <div className="input-group">
                  <label>12th Percentage</label>
                  <input
                    type="number"
                    name="academics.twelfthPercentage"
                    value={profile.academics.twelfthPercentage}
                    onChange={handleChange}
                    placeholder="Enter 12th percentage"
                    step="0.01"
                    min="0"
                    max="100"
                    required
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Graduation Stream</label>
                  <select
                    name="academics.graduationStream"
                    value={profile.academics.graduationStream}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Stream</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Electronics Engineering">Electronics Engineering</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Science">Science</option>
                    <option value="Arts">Arts</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Graduation Degree</label>
                  <select
                    name="academics.graduationDegree"
                    value={profile.academics.graduationDegree}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Degree</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="B.E.">B.E.</option>
                    <option value="BCA">BCA</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="B.Com">B.Com</option>
                    <option value="BA">BA</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>University</label>
                  <input
                    type="text"
                    name="academics.university"
                    value={profile.academics.university}
                    onChange={handleChange}
                    placeholder="Enter university name"
                    required
                  />
                </div>
                <div className="input-group">
                  <label>Graduation CGPA</label>
                  <input
                    type="number"
                    name="academics.graduationCGPA"
                    value={profile.academics.graduationCGPA}
                    onChange={handleChange}
                    placeholder="Enter graduation CGPA"
                    step="0.01"
                    min="0"
                    max="10"
                    required
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>MBA First Year CGPA</label>
                  <input
                    type="number"
                    name="academics.mbaFirstYearCGPA"
                    value={profile.academics.mbaFirstYearCGPA}
                    onChange={handleChange}
                    placeholder="Enter MBA first year CGPA"
                    step="0.01"
                    min="0"
                    max="10"
                    required
                  />
                </div>
                <div className="input-group">
                  <label>MBA Specialization</label>
                  <select
                    name="academics.mbaSpecialization"
                    value={profile.academics.mbaSpecialization}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Specialization</option>
                    <option value="Finance">Finance</option>
                    <option value="Marketing">Marketing</option>
                    <option value="HR">HR</option>
                    <option value="Operations">Operations</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

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

          {/* Resume Upload */}
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
                  accept=".pdf,.doc,.docx"
                  style={{ display: 'none' }}
                />
                <label htmlFor="resumeFile" className="upload-label">
                  <Upload size={32} className="upload-icon" />
                  <p>Click to upload your resume (PDF, DOC, DOCX)</p>
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