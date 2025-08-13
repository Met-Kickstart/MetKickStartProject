import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompleteProfile from '../components/Students/CompleteProfile';
import StudentMenu from '../components/Students/StudentMenu';
import Overview from '../components/Students/Overview';
import StudentProfile from '../components/Students/StudentProfile';
import PlacementDrives from '../components/Students/PlacementDrives';
import TestProcess from '../components/Students/TestProcess';
import { FaUser, FaCalculator, FaBriefcase, FaBuilding } from 'react-icons/fa';
import './StudentDashboard.css';

const StudentDashboard = ({ onLogout }) => {
  const [profileCompleted, setProfileCompleted] = useState(false);
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    rollNo: '',
    contactNo: '',
    officialEmail: '',
    personalEmail: '',
    profileImage: 'https://ui-avatars.com/api/?name=Student&background=random',
    address: '',
    dateOfBirth: '',
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
    resumeFile: null,
    companiesApplied: [],
    status: 'Not Placed',
    prepSessionsAttended: 0,
    aptitudeTestsAttended: 0,
    companiesAppliedCount: 0
  });
  const [activeMenu, setActiveMenu] = useState('overview');

  const handleProfileComplete = (profileData) => {
    // Validate required fields
    const requiredFields = [
      'fullName',
      'rollNo',
      'contactNo',
      'officialEmail',
      'personalEmail',
      'address',
      'dateOfBirth',
      'academics.tenthPercentage',
      'academics.twelfthPercentage',
      'academics.graduationStream',
      'academics.graduationDegree',
      'academics.university',
      'academics.graduationCGPA',
      'academics.mbaFirstYearCGPA',
      'academics.mbaSpecialization',
      'ojt.companyName',
      'ojt.projectTitle',
      'ojt.joiningDate',
      'ojt.companyGuide.name',
      'ojt.companyGuide.contactNo',
      'ojt.companyGuide.emailId',
      'ojt.collegeGuideName',
      'linkedinUrl'
    ];

    const hasAllRequiredFields = requiredFields.every(field => {
      const value = field.split('.').reduce((obj, key) => obj?.[key], profileData);
      return value !== undefined && value !== '';
    });

    if (!hasAllRequiredFields) {
      alert('Please fill in all required fields');
      return;
    }

    if (!profileData.resumeFile) {
      alert('Please upload your resume');
      return;
    }

    setProfile(prevProfile => ({
      ...prevProfile,
      ...profileData,
      name: profileData.fullName // Ensure name is set for header display
    }));
    setProfileCompleted(true);
    // You might want to save this data to your backend here
  };

  const renderContent = () => {
    switch (activeMenu) {
      case 'overview':
        return <Overview />;
      case 'profile':
        return <StudentProfile profile={profile} />;
      case 'test-process':
        return <TestProcess />;
      case 'placement-drives':
        return <PlacementDrives />;
      default:
        return <Overview />;
    }
  };

  if (!profileCompleted) {
    return (
      <div className="student-dashboard">
        <Header isLoggedIn={true} onLogoutClick={onLogout} />
        <CompleteProfile onProfileComplete={handleProfileComplete} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="student-dashboard">
      <Header 
        isLoggedIn={true} 
        onLogoutClick={onLogout}
        profileLogo={profile?.profileImage || "https://ui-avatars.com/api/?name=Student&background=random"}
        simplified={true}
      />
      <div className="dashboard-container">
        <StudentMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <div className="dashboard-content">
          <h2>{profile?.fullName || 'Welcome'}</h2>
          {renderContent()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentDashboard;
