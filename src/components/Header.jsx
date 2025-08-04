import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaSignInAlt } from 'react-icons/fa';

const Header = ({ onLoginClick, isLoggedIn, onLogoutClick, profileLogo }) => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <FaGraduationCap color="white" />
          </div>
          <div className="logo-text">
            <h1>METkickstart</h1>
            <p>Adgaon, Nashik - Placement Portal</p>
          </div>
        </Link>

        <div className="nav-links">
          <Link to="/" onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('about');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>About Institute</Link>
          <Link to="/" onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('drives');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>Placement Drives</Link>
          <Link to="/" onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('stats');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>Placement Stats</Link>
          <Link to="/" onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('achievements');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>Our Achievements</Link>
          <Link to="/" onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>Contact</Link>
          {isLoggedIn ? (
            <>
              {profileLogo && (
                <img
                  src={profileLogo}
                  alt="Profile Logo"
                  style={{ width: '32px', height: '32px', borderRadius: '50%', marginRight: '10px' }}
                />
              )}
              <Link to="/" className="login-btn" onClick={(e) => { e.preventDefault(); onLogoutClick(); }}>
                Logout
              </Link>
            </>
          ) : (
            <Link to="/" className="login-btn" onClick={(e) => { e.preventDefault(); onLoginClick(); }}>
              Login <FaSignInAlt />
            </Link>
          )}
         
        </div>
      </div>
    </header>
  );
};

export default Header;
