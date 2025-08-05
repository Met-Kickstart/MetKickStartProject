import React, { useState, useEffect } from 'react';
import { 
  FaGraduationCap, FaSignInAlt, FaMoon, FaSun, FaUniversity,
  FaGoogle, FaMicrosoft, FaBuilding, FaTimes, FaCheckCircle,
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube,
  FaAngleRight, FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart,
  FaAmazon // Add this import
} from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginModal from '../components/LoginModal';
import ApplyModal from '../components/ApplyModal';
import Toast from '../components/Toast';

const Welcome = ({ onLoginSuccess }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });
  const [showYearwiseStats, setShowYearwiseStats] = useState(false); // Add this near the top with other state declarations
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [userProfile, setUserProfile] = useState(null); // Store user profile data

  // Set theme on initial load
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    showToast(`Switched to ${newTheme === 'dark' ? 'dark' : 'light'} mode`);
  };

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000);
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, show: false }));
  };

  // Add this mock data for year-wise statistics
  const yearwiseStats = [
    {
      year: "2024-25",
      placementRate: "96%",
      avgPackage: "7.2 LPA",
      highestPackage: "15 LPA",
      companiesVisited: "300+"
    },
    {
      year: "2023-24",
      placementRate: "94%",
      avgPackage: "6.8 LPA",
      highestPackage: "14 LPA",
      companiesVisited: "280+"
    },
    {
      year: "2022-23",
      placementRate: "92%",
      avgPackage: "6.5 LPA",
      highestPackage: "12 LPA",
      companiesVisited: "250+"
    }
  ];

  // Create floating particles
  const particles = Array.from({ length: 30 }, (_, i) => {
    const size = Math.random() * 10 + 5;
    return (
      <div 
        key={i}
        className="particle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 10 + 10}s`,
          animationDelay: `${Math.random() * 5}s`
        }}
      />
    );
  });

  // Mock functions for login/logout
  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserProfile({ role, profileImage: 'https://randomuser.me/api/portraits/men/32.jpg' }); // Mock profile data
    showToast('Login successful!');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserProfile(null);
    showToast('Logout successful!');
  };

  return (
    <div className="welcome-page">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <div className="particles">{particles}</div>
      
      <div className="met-badge" role="banner">
        <FaUniversity />
        <span>MET Bhujbal Knowledge City, Nashik</span>
      </div>
      
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onLoginClick={() => setShowLoginModal(true)} 
        isLoggedIn={isLoggedIn}
        onLogoutClick={handleLogout}
        profileLogo={userProfile?.profileImage}
        userRole={userProfile?.role} // Add this line
      />

      <main id="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-header">
              <h2>Shaping Careers, Building Futures</h2>
              <a href="#drives" 
                className="cta-button animate-popup" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('drives').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                View Current Drives
              </a>
            </div>
            <p>MET Bhujbal Knowledge City provides world-class education and industry-focused training to prepare students for successful careers in the global workforce.</p>
            
            <div className="stats-container">
              <div className="stat-box">
                <div className="number">96%</div>
                <div className="label">Placement Rate</div>
              </div>
              <div className="stat-box">
                <div className="number">300+</div>
                <div className="label">Recruiting Companies</div>
              </div>
              <div className="stat-box">
                <div className="number">₹15 LPA</div>
                <div className="label">Highest Package</div>
              </div>
              <div className="stat-box">
                <div className="number">₹7.2 LPA</div>
                <div className="label">Average Package</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Active Drives */}
        <section id="drives" className="active-drives">
          <div className="drives-container">
            <div className="section-title">
              <h2>Placement Drives</h2>
              <p>Current recruitment status at MET Bhujbal Knowledge City</p>
            </div>
            
            <div className="drives-status-columns">
              {/* Open for Nomination */}
              <div className="drive-status-column nomination">
                <div className="column-header">
                  <h3>Open for Nomination</h3>
                  <span className="drive-count">8</span>
                </div>
                <div className="drives-list">
                  <div className="drive-card">
                    <div className="drive-header">
                      <div className="drive-title">Software Engineer</div>
                      <div className="drive-date nomination">Apply Now</div>
                    </div>
                    <div className="drive-content">
                      <div className="company-info">
                        <div className="company-logo">
                          <FaGoogle />
                        </div>
                        <div className="company-details">
                          <h4>Google India</h4>
                          <p>Multiple Roles</p>
                        </div>
                      </div>
                      <div className="drive-details">
                        <div className="detail-item">
                          <span>Last Date: 15 Oct</span>
                        </div>
                        <div className="detail-item">
                          <span>Package: 12-15 LPA</span>
                        </div>
                      </div>
                      <div className="applied-count"><strong>142</strong> applications</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Selection Process Started */}
              <div className="drive-status-column process">
                <div className="column-header process">
                  <h3>Selection Process Started</h3>
                  <span className="drive-count">5</span>
                </div>
                <div className="drives-list">
                  <div className="drive-card">
                    <div className="drive-header">
                      <div className="drive-title">Management Trainee</div>
                      <div className="drive-date process">Round 2</div>
                    </div>
                    <div className="drive-content">
                      <div className="company-info">
                        <div className="company-logo">
                          <FaMicrosoft />
                        </div>
                        <div className="company-details">
                          <h4>Microsoft</h4>
                          <p>Technical Round</p>
                        </div>
                      </div>
                      <div className="drive-details">
                        <div className="detail-item">
                          <span>Shortlisted: 45 students</span>
                        </div>
                        <div className="detail-item">
                          <span>Next: HR Round</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Completed */}
              <div className="drive-status-column completed">
                <div className="column-header">
                  <h3>Process Completed</h3>
                  <span className="drive-count">12</span>
                </div>
                <div className="drives-list">
                  <div className="drive-card">
                    <div className="drive-header">
                      <div className="drive-title">TCS Digital</div>
                      <div className="drive-date completed">Selected</div>
                    </div>
                    <div className="drive-content">
                      <div className="company-info">
                        <div className="company-logo">
                          <FaBuilding />
                        </div>
                        <div className="company-details">
                          <h4>TCS</h4>
                          <p>System Engineer</p>
                        </div>
                      </div>
                      <div className="drive-result">
                        <span className="selected">32 Selected</span>
                        <span className="package">6.5 LPA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Placement Stats */}
        <section id="stats" className="placement-stats">
          <div className="stats-container-full">
            <div className="section-title">
              <h2>Placement Statistics</h2>
              <p>Our consistent track record of excellent placements</p>
              <button 
                className="yearwise-stats-btn"
                onClick={() => setShowYearwiseStats(!showYearwiseStats)}
              >
                {showYearwiseStats ? 'Hide Year-wise Stats' : 'Show Year-wise Stats'}
              </button>
            </div>
            
            {showYearwiseStats ? (
              <div className="yearwise-stats">
                {yearwiseStats.map((year) => (
                  <div key={year.year} className="year-stat-card">
                    <h3>{year.year}</h3>
                    <div className="year-stats-grid">
                      <div className="year-stat-item">
                        <div className="stat-icon">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <div className="stat-number">{year.placementRate}</div>
                        <div className="stat-label">Placement Rate</div>
                      </div>
                      <div className="year-stat-item">
                        <div className="stat-icon">
                          <i className="fas fa-rupee-sign"></i>
                        </div>
                        <div className="stat-number">{year.avgPackage}</div>
                        <div className="stat-label">Average Package</div>
                      </div>
                      <div className="year-stat-item">
                        <div className="stat-icon">
                          <i className="fas fa-award"></i>
                        </div>
                        <div className="stat-number">{year.highestPackage}</div>
                        <div className="stat-label">Highest Package</div>
                      </div>
                      <div className="year-stat-item">
                        <div className="stat-icon">
                          <i className="fas fa-building"></i>
                        </div>
                        <div className="stat-number">{year.companiesVisited}</div>
                        <div className="stat-label">Companies Visited</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div className="stat-number">96%</div>
                  <div className="stat-label">Placement Rate</div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-rupee-sign"></i>
                  </div>
                  <div className="stat-number">₹15 LPA</div>
                  <div className="stat-label">Highest Package</div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="stat-number">300+</div>
                  <div className="stat-label">Recruiting Companies</div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <div className="stat-number">₹7.2 LPA</div>
                  <div className="stat-label">Average Package</div>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* MET Shines Section */}
        <section id="met-shines" className="met-shines" aria-labelledby="met-shines-title">
          <div className="met-shines-container">
            <div className="section-title">
              <h2 id="met-shines-title">MET Shines</h2>
              <p>Success stories of our placed students</p>
            </div>
            
            <div className="met-shines-grid" role="list">
              <div className="shine-card" role="listitem">
                <div className="student-profile">
                  <div className="student-image">
                    <img 
                      src="https://randomuser.me/api/portraits/women/44.jpg" 
                      alt="Profile photo of Priya Sharma" 
                      loading="lazy"
                    />
                  </div>
                  <div className="student-info">
                    <h3>Priya Sharma</h3>
                    <p className="batch">MBA 2023-25</p>
                  </div>
                </div>
                <div className="placement-details">
                  <div className="company-logo" aria-hidden="true">
                    <FaGoogle />
                  </div>
                  <div className="company-info">
                    <h4>Google India</h4>
                    <p className="role">Software Engineer</p>
                    <p className="package" aria-label="Package: 24 Lakhs Per Annum">₹24 LPA</p>
                  </div>
                </div>
              </div>

              <div className="shine-card" role="listitem">
                <div className="student-profile">
                  <div className="student-image">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Student" />
                  </div>
                  <div className="student-info">
                    <h3>Rahul Patel</h3>
                    <p className="batch">MBA 2023-25</p>
                  </div>
                </div>
                <div className="placement-details">
                  <div className="company-logo" aria-hidden="true">
                    <FaMicrosoft />
                  </div>
                  <div className="company-info">
                    <h4>Microsoft</h4>
                    <p className="role">Product Manager</p>
                    <p className="package" aria-label="Package: 21 Lakhs Per Annum">₹21 LPA</p>
                  </div>
                </div>
              </div>

              <div className="shine-card" role="listitem">
                <div className="student-profile">
                  <div className="student-image">
                    <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="Student" />
                  </div>
                  <div className="student-info">
                    <h3>Neha Deshmukh</h3>
                    <p className="batch">MBA 2023-25</p>
                  </div>
                </div>
                <div className="placement-details">
                  <div className="company-logo" aria-hidden="true">
                    <FaAmazon />
                  </div>
                  <div className="company-info">
                    <h4>Amazon</h4>
                    <p className="role">Business Analyst</p>
                    <p className="package" aria-label="Package: 19 Lakhs Per Annum">₹19 LPA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Prep Sessions Section */}
        <section id="prep-sessions" className="prep-sessions">
          <div className="prep-container">
            <div className="section-title">
              <h2>Preparation Sessions</h2>
              <p>Enhance your skills with our placement preparation sessions</p>
            </div>
            
            <div className="sessions-grid">
              <div className="session-card">
                <div className="session-header">
                  <div className="session-type">Technical</div>
                  <div className="session-status active">Ongoing</div>
                </div>
                <h3>Data Structures & Algorithms</h3>
                <p className="session-details">
                  Master DSA concepts for technical interviews
                </p>
                <div className="session-info">
                  <span><i className="far fa-clock"></i> 3:00 PM - 5:00 PM</span>
                  <span><i className="far fa-calendar"></i> Every Tuesday</span>
                  <span><i className="far fa-user"></i> Prof. Sharma</span>
                </div>
              </div>

              <div className="session-card">
                <div className="session-header">
                  <div className="session-type">Aptitude</div>
                  <div className="session-status upcoming">Tomorrow</div>
                </div>
                <h3>Quantitative Aptitude</h3>
                <p className="session-details">
                  Practice problems for placement aptitude tests
                </p>
                <div className="session-info">
                  <span><i className="far fa-clock"></i> 2:00 PM - 4:00 PM</span>
                  <span><i className="far fa-calendar"></i> Every Thursday</span>
                  <span><i className="far fa-user"></i> Prof. Patel</span>
                </div>
              </div>

              <div className="session-card">
                <div className="session-header">
                  <div className="session-type">Soft Skills</div>
                  <div className="session-status upcoming">Next Week</div>
                </div>
                <h3>Interview Preparation</h3>
                <p className="session-details">
                  Mock interviews and HR round preparation
                </p>
                <div className="session-info">
                  <span><i className="far fa-clock"></i> 1:00 PM - 3:00 PM</span>
                  <span><i className="far fa-calendar"></i> Every Friday</span>
                  <span><i className="far fa-user"></i> Ms. Desai</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <LoginModal 
        show={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
        onLoginSuccess={(role) => {
          setShowLoginModal(false);
          showToast('Login successful! Redirecting...');
          onLoginSuccess(role);
        }}
      />
      <ApplyModal 
        show={showApplyModal} 
        onClose={() => setShowApplyModal(false)}
        onSubmitSuccess={() => {
          setShowApplyModal(false);
          showToast('Your inquiry has been submitted successfully!');
        }}
      />
      <Toast 
        show={toast.show} 
        message={toast.message} 
        onClose={closeToast} 
      />
    </div>
  );
};

export default Welcome;