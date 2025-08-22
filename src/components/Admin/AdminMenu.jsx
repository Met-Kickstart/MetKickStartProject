import React from 'react';
import { FaUsers, FaBuilding, FaChartBar, FaBriefcase, FaGraduationCap, FaChartPie, FaMailBulk, FaBook, FaStar } from 'react-icons/fa';

const AdminMenu = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: <FaChartBar /> },
    { id: 'create-drive', label: 'Create Drive', icon: <FaBriefcase /> },
    { id: 'student-management', label: 'Student Management', icon: <FaUsers /> },
    { id: 'placement-drives-admin', label: 'Placement Drives', icon: <FaBuilding /> },
    { id: 'prep-sessions', label: 'Prep Session', icon: <FaGraduationCap /> },
    { 
      id: 'mock-aptitude-test', 
      label: 'Mock Aptitude Tests', 
      icon: <FaBook /> 
    },
    { id: 'statistics', label: 'Statistics', icon: <FaChartPie /> },
    {
      id: 'met-shines',
      label: 'MET Shines',
      icon: <FaStar />
    }
  ];

  return (
    <nav className="admin-menu" role="navigation" aria-label="Admin navigation">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={`menu-item ${activeTab === item.id ? 'active' : ''}`}
          onClick={() => setActiveTab(item.id)}
          aria-current={activeTab === item.id ? 'page' : undefined}
        >
          <span className="menu-icon" aria-hidden="true">{item.icon}</span>
          <span className="menu-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default AdminMenu;