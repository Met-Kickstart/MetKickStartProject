import React from 'react';
import { FaHome, FaUser, FaCalculator, FaBriefcase, FaBook } from 'react-icons/fa'; 
const StudentMenu = ({ activeMenu, setActiveMenu }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: <FaHome /> },
    { id: 'profile', label: 'Profile', icon: <FaUser /> },
    
    { id: 'placement-drives', label: 'Placement Drives', icon: <FaBriefcase /> },
    { id: 'test-process', label: 'Test Process', icon: <FaCalculator /> },
    
  ];

  return (
    <div className="student-menu">
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`menu-item ${activeMenu === item.id ? 'active' : ''}`}
            onClick={() => setActiveMenu(item.id)}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default StudentMenu;
