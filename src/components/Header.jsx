import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import metLogo from '../assets/met-iom-logo.png'; // Add this import

const Header = ({ onLoginClick, isLoggedIn, onLogoutClick, profileLogo, simplified = false, userRole }) => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <img src={metLogo} alt="MET IOM Logo" />
          </div>
          <div className="logo-text">
            <h1>METkickstart</h1>
            <p>Adgaon, Nashik - Placement Portal</p>
          </div>
        </Link>

        <div className="nav-links">
          {/* Show tabs only for guests (not logged in) */}
          {!isLoggedIn && !simplified && (
            <>
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
                const el = document.getElementById('met-shines');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>MET Shines</Link>
              <Link to="/" onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('prep-sessions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>Prep Sessions</Link>
            </>
          )}

          {/* Auth section remains unchanged */}
          {isLoggedIn ? (
            <div className="auth-section">
              {profileLogo && (
                <img
                  src={profileLogo}
                  alt="Profile Logo"
                  className="profile-logo"
                />
              )}
              <Link to="/" className="login-btn" onClick={onLogoutClick}>
                Logout
              </Link>
            </div>
          ) : (
            <div className="auth-section">
              <Link to="/" className="login-btn" onClick={onLoginClick}>
                Login <FaSignInAlt />
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
