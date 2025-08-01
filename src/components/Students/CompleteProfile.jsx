import React, { useState } from 'react';
import { Upload, Building, Mail, Phone, Calendar, BookOpen, GraduationCap, Percent, Award, Linkedin, Globe } from 'lucide-react';
import './CompleteProfile.css';

const CompleteProfile = ({ onProfileComplete }) => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    tenthMarks: '',
    twelfthMarks: '',
    graduationStream: '',
    graduationDegree: '',
    university: '',
    graduationPercentage: '',
    specialization: '',
    currentSemester: '',
    currentCGPA: '',
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
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
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
      'twelfthMarks', 'graduationDetails', 'graduationPercentage',
      'currentSemester', 'currentCGPA'
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
          {/* Personal Information Card */}
          <div className="form-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <GraduationCap size={24} />
              </div>
              <h3>Personal Information</h3>
            </div>
            <div className="card-content">
              <div className="input-row">
                <div className="input-group">
                  <label>
                    <Building size={20} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="input-group">
                  <label>
                    <Mail size={20} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>
                    <Phone size={20} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Academic Information Card */}
          <div className="form-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <BookOpen size={24} />
              </div>
              <h3>Academic Information</h3>
            </div>
            <div className="card-content">
              <div className="input-row">
                <div className="input-group">
                  <label>
                    <Percent size={20} />
                    10th Marks (%)
                  </label>
                  <input
                    type="number"
                    name="tenthMarks"
                    value={profile.tenthMarks}
                    onChange={handleChange}
                    placeholder="Enter 10th percentage"
                    min="0"
                    max="100"
                    required
                  />
                </div>
                <div className="input-group">
                  <label>
                    <Percent size={20} />
                    12th Marks (%)
                  </label>
                  <input
                    type="number"
                    name="twelfthMarks"
                    value={profile.twelfthMarks}
                    onChange={handleChange}
                    placeholder="Enter 12th percentage"
                    min="0"
                    max="100"
                    required
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>
                    <GraduationCap size={20} />
                    Graduation Stream
                  </label>
                  <select
                    name="graduationStream"
                    value={profile.graduationStream}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Stream</option>
                    {graduationStreams.map(stream => (
                      <option key={stream} value={stream}>{stream}</option>
                    ))}
                  </select>
                </div>
                <div className="input-group">
                  <label>
                    <GraduationCap size={20} />
                    Degree
                  </label>
                  <select
                    name="graduationDegree"
                    value={profile.graduationDegree}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Degree</option>
                    {degrees.map(degree => (
                      <option key={degree} value={degree}>{degree}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>
                    <Globe size={20} />
                    University
                  </label>
                  <input
                    type="text"
                    name="university"
                    value={profile.university}
                    onChange={handleChange}
                    placeholder="Enter university name"
                    required
                  />
                </div>
                <div className="input-group">
                  <label>
                    <Percent size={20} />
                    Graduation Percentage
                  </label>
                  <input
                    type="number"
                    name="graduationPercentage"
                    value={profile.graduationPercentage}
                    onChange={handleChange}
                    placeholder="Enter graduation percentage"
                    min="0"
                    max="100"
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

          {/* Current Academic Status */}
          <div className="form-card">
            <div className="card-header">
              <div className="icon-wrapper">
                <Award size={24} />
              </div>
              <h3>Current Academic Status</h3>
            </div>
            <div className="card-content">
              <div className="input-row">
                <div className="input-group">
                  <label>
                    <Calendar size={20} />
                    Current Semester
                  </label>
                  <select
                    name="currentSemester"
                    value={profile.currentSemester}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Semester</option>
                    <option value="1">Semester 1</option>
                    <option value="2">Semester 2</option>
                    <option value="3">Semester 3</option>
                    <option value="4">Semester 4</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>
                    <Award size={20} />
                    Current CGPA
                  </label>
                  <input
                    type="number"
                    name="currentCGPA"
                    value={profile.currentCGPA}
                    onChange={handleChange}
                    placeholder="Enter current CGPA"
                    step="0.01"
                    min="0"
                    max="10"
                    required
                  />
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