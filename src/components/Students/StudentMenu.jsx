import React from 'react';
import { FaUser, FaCalculator, FaBriefcase, FaBook, FaChartBar } from 'react-icons/fa';
import './StudentMenu.css';

const StudentMenu = ({ activeMenu, setActiveMenu }) => {
  const menuItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <FaChartBar />
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <FaUser />
    },
    {
      id: 'placement-drives',
      label: 'Placement Drives',
      icon: <FaBriefcase />
    },
    {
      id: 'test-process',
      label: 'Test Process',
      icon: <FaCalculator />
    }
  ];

  return (
    <nav className="student-side-menu">
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
  );
};

export default StudentMenu;
