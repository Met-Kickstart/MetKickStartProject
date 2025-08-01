import React from 'react';
import { FaGraduationCap, FaSignInAlt, FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ theme, toggleTheme, onLoginClick, isLoggedIn, onLogoutClick, profileLogo }) => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo">
          <div className="logo-icon">
            <FaGraduationCap color="white" />
          </div>
          <div className="logo-text">
            <h1>METkickstart</h1>
            <p>Adgaon, Nashik - Placement Portal</p>
          </div>
        </a>

        <div className="nav-links">
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('about');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>About Institute</a>
          <a href="#drives" onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('drives');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>Placement Drives</a>
          <a href="#stats" onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('stats');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>Placement Stats</a>
          <a href="#achievements" onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('achievements');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>Our Achievements</a>
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>Contact</a>
          {isLoggedIn ? (
            <>
              {profileLogo && (
                <img
                  src={profileLogo}
                  alt="Profile Logo"
                  style={{ width: '32px', height: '32px', borderRadius: '50%', marginRight: '10px' }}
                />
              )}
              <a href="#" className="login-btn" onClick={(e) => { e.preventDefault(); onLogoutClick(); }}>
                Logout
              </a>
            </>
          ) : (
            <a href="#" className="login-btn" onClick={(e) => { e.preventDefault(); onLoginClick(); }}>
              Login <FaSignInAlt />
            </a>
          )}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
