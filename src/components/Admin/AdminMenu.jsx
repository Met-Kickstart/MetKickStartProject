import React from 'react';
import { FaUsers, FaBuilding, FaChartBar, FaUserPlus, FaBriefcase, FaGraduationCap, FaChartPie } from 'react-icons/fa';

const AdminMenu = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: <FaChartBar /> },
    { id: 'create-drive', label: 'Create Drive', icon: <FaBriefcase /> },
    { id: 'student-management', label: 'Student Management', icon: <FaUsers /> },
    { id: 'create-student', label: 'Add New Student', icon: <FaUserPlus /> },
    { id: 'placement-drives', label: 'Placement Drives', icon: <FaBuilding /> },
    { id: 'statistics', label: 'Statistics', icon: <FaChartPie /> },
    { id: 'notification', label: 'Email Notification', icon: <FaGraduationCap /> }
  ];

  return (
    <div className="admin-menu">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={`menu-item ${activeTab === item.id ? 'active' : ''}`}
          onClick={() => setActiveTab(item.id)}
        >
          <span className="menu-icon">{item.icon}</span>
          <span className="menu-label">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default AdminMenu;