import React, { useState, useEffect, useRef } from 'react';
import { 
   FaUniversity, 
  FaUsers, 
  FaBuilding, 
  FaCheckCircle,
  FaGoogle,      // Add for Google
  FaMicrosoft,   // Add for Microsoft
  FaCode,         // Add for TCS (since there's no specific TCS icon)
  FaChartBar,
  FaRupeeSign
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
  const [shines, setShines] = useState([
    {
      id: 1,
      url: '/sample1.jpg'
    },
    {
      id: 2, 
      url: '/sample2.jpg'
    }
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

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

  useEffect(() => {
    const slider = sliderRef.current;
    let intervalId;

    const startSlider = () => {
      intervalId = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % shines.length);
      }, 3000);
    };

    if (shines.length > 0) {
      startSlider();
    }

    return () => clearInterval(intervalId);
  }, [shines.length]);

  // Update the topRecruiters array with correct URLs
  const topRecruiters = [
    {
      id: 1,
      name: 'Sahyadri-Farm',
      logo: 'https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/bd/c9/27/bdc92751-a405-6f28-1ffc-a39e12345fbb/source/512x512bb.jpg'
    },
    {
      id: 2,
      name: 'Winjit',
      logo: 'http://africanbrains.net/wp-content/uploads/2016/03/winjit-1.jpg'
    },
    {
      id: 3,
      name: 'Lakme',
      logo: 'https://tse4.mm.bing.net/th/id/OIP.evao0IowpCyI8jtIpEyZKQHaEK?pid=Api&P=0&h=220'
    },
    {
      id: 4,
      name: 'Dmart',
      logo: 'https://tse1.mm.bing.net/th/id/OIP.5beol7njBrHcUNsiJvcjgQHaBt?pid=Api&P=0&h=220'
    },
    {
      id: 5,
      name: 'Simpolo-ceramics',
      logo: 'https://www.methodproductions.tv/wp-content/uploads/2020/09/simpolo-logo.png'
    },
    {
      id: 6,
      name: 'LG',
      logo: 'https://logos-world.net/wp-content/uploads/2020/05/LG-Logo-2014-present.png'
    },
    {
      id: 7,
      name: 'Entigrity',
      logo: 'https://tse2.mm.bing.net/th/id/OIP.DPB6oQ4DBUOITOPPSSfeewAAAA?pid=Api&P=0&h=220'
    },
    {
      id: 8,
      name: 'Eclerx',
      logo: 'https://image3.mouthshut.com/images/imagesp/925099878s.jpg'
    },
    {
      id: 9,
      name: 'Decimal-point',
      logo: 'https://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/CONT96B732E4D8574FC6A0F29BF37C36F0DD/native/customerlogo-dpa-clr.svg'
    },
    {
      id: 10,
      name: 'Mahindra-epc',
      logo: 'https://cdn.enfsolar.com/ID/logo/3321896224.gif?v=1'
    },
    {
      id: 11,
      name: 'Berger',
      logo: 'https://whatthelogo.com/storage/logos/berger-paints-166490.png'
    },
    {
      id: 12,
      name: 'Jana Small Finance',
      logo: 'https://www.uipath.com/hubfs/resources/logos/janaSmallFinanceBank_color.png'
    },
    {
      id: 13,
      name: 'IDBI-Capital',
      logo: 'https://idbicapital.com/CSR/images/idbi-capital-logo.png'
    },
    {
      id: 14,
      name: 'Depth-consulting',
      logo: 'https://depthconsulting.in/static/images/depthlogo_dark.png'
    },
    {
      id: 15,
      name: 'Home-first',
      logo: 'https://d1suqciy1b15i1.cloudfront.net/cv_live/logos/HomesFirst-20250324-112907'
    },
    {
      id: 16,
      name: 'Icici bank',
      logo: 'https://logos-download.com/wp-content/uploads/2016/10/icici_bank_logo_symbol.png'
    },
    {
      id: 17,
      name: 'Kotak-securities',
      logo: 'https://equityblues.com/wp-content/uploads/2018/10/kotak-securities-logo.jpg'
    },
    {
      id: 18,
      name: 'Motilal-oswal',
      logo: 'https://companieslogo.com/img/orig/MOTILALOFS.NS_BIG-55e383aa.png?t=1720436307'
    },
    {
      id: 19,
      name: 'Reliance-retail',
      logo: 'https://nandan.co.in/wp-content/uploads/2020/02/Nandan-Clients-Logo_0001_Reliance-1-1024x325.jpg'
    },
    {
      id: 20,
      name: 'Axis-Bank',
      logo: 'https://logos-download.com/wp-content/uploads/2016/12/Axis_Bank_logo_logotype.png'
    },
    {
      id: 21,
      name: 'jyothi-labs',
      logo: 'https://tse1.mm.bing.net/th/id/OIP.kxlQB20pepcSwoELGo4mNwHaEH?pid=Api&P=0&h=220'
    },
    {
      id: 22,
      name: 'Hamleys',
      logo: 'https://tse1.mm.bing.net/th/id/OIP.vhYLzaUnb21cjRe08HQBeQHaE-?pid=Api&P=0&h=220'
    }, 
    {
      id: 23,
      name: 'Mgb',
      logo: 'https://www.utusan.com.my/wp-content/uploads/MGB-Logo.jpg'
    },
    {
      id: 24,
      name: 'Aditya-Birla-Group',
      logo: 'https://tse3.mm.bing.net/th/id/OIP.aqfQBgcMRd16fHYWtXzTEAHaDz?pid=Api&P=0&h=220'
    },
    {
      id: 25,
      name: 'Rythmsoft',
      logo: 'https://static.wixstatic.com/media/dd8fe2_5fe07f4677404b2f8de1d3e8aeb04459~mv2.png/v1/fill/w_314,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Rhythmsoft%20-%20Logo.png'
    },
     {
      id: 26,
      name: 'Godrej',
      logo: 'https://i0.wp.com/psfonttk.com/wp-content/uploads/2020/09/godrej-logo-hd.png?resize=768%2C406&ssl=1'
    },
    {
      id: 27,
      name: 'Daikin',
      logo: 'https://tse4.mm.bing.net/th/id/OIP.6Z6UVoSSaFu1E1KsGaBTXgHaEK?pid=Api&P=0&h=220'
    },
    {
      id: 28,
      name: 'Deloitte',
      logo: 'https://tse3.mm.bing.net/th/id/OIP.7_DgX07Suc_7U92gkbaWlQHaBY?pid=Api&P=0&h=220'
    },
    {
      id: 29,
      name: 'Piramal',
      logo: 'https://tse2.mm.bing.net/th/id/OIP.uscTje5GxIjYXNpSRDBfygHaEH?pid=Api&P=0&h=220'
    },
    {
      id: 30,
      name: 'MRF',
      logo: 'https://tse2.mm.bing.net/th/id/OIP.gY1uKA2jyWYK39z47I7C0gHaFc?pid=Api&P=0&h=220'
    },
    {
      id: 31,
      name: 'BNY-mellon',
      logo: 'https://www.globalcustodian.com/wp-content/uploads/2022/02/Bank_of_New_York_Mellon_logo.svg-2048x270.png'
    },
    {
      id: 32,
      name: 'ITC',
      logo: 'https://tse3.mm.bing.net/th/id/OIP.22y8LfOk0wxxEfgaa6yG3gHaHa?pid=Api&P=0&h=220'
    }

  ];


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
        
        {/* Placement Drives Status */}
        <section id="drives" className="placement-drives">
          <div className="drives-container">
            <div className="section-title">
              <h2>Placement Drives</h2>
              <p>Current recruitment status at MET Bhujbal Knowledge City</p>
            </div>
          
            <div className="drives-status-grid">
              {/* Open for Nomination */}
              <div className="status-card nomination">
                <h3 className="status-header">Open for Nomination</h3>
                <div className="status-content">
                  <div className="drive-info">
                    <div className="company-logo">
                      <FaGoogle />
                    </div>
                    <div className="company">Google India</div>
                    <div className="role">Software Engineer</div>
                    <div className="package">12-15 LPA</div>
                  </div>
                </div>
              </div>

              {/* Active Drives */}
              <div className="status-card process">
                <h3 className="status-header">Active Drives</h3>
                <div className="status-content">
                  <div className="drive-info">
                    <div className="company-logo">
                      <FaMicrosoft />
                    </div>
                    <div className="company">Microsoft</div>
                    <div className="role">Management Trainee</div>
                    <div className="stage">Technical Round</div>
                  </div>
                </div>
              </div>

              {/* Completed */}
              <div className="status-card completed">
                <h3 className="status-header">Completed</h3>
                <div className="status-content">
                  <div className="drive-info">
                    <div className="company-logo">
                      <FaCode />
                    </div>
                    <div className="company">TCS Digital</div>
                    <div className="selected">32 Selected</div>
                    <div className="package">6.5 LPA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Placement Statistics Section */}
        <section id="statistics" className="placement-stats">
          <div className="stats-container">
            <div className="section-title">
              <h2>Placement Statistics</h2>
              <p>Our placement achievements over the years</p>
            </div>
            
            <div className="yearwise-stats-grid">
              {yearwiseStats.map((year) => (
                <div key={year.year} className="year-stat-card">
                  <h3>{year.year}</h3>
                  <div className="year-stats">
                    <div className="year-stat-item">
                      <span className="label">Placement Rate</span>
                      <span className="value">{year.placementRate}</span>
                    </div>
                    <div className="year-stat-item">
                      <span className="label">Average Package</span>
                      <span className="value">{year.avgPackage}</span>
                    </div>
                    <div className="year-stat-item">
                      <span className="label">Highest Package</span>
                      <span className="value">{year.highestPackage}</span>
                    </div>
                    <div className="year-stat-item">
                      <span className="label">Companies Visited</span>
                      <span className="value">{year.companiesVisited}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* MET Shines Section */}
        <section id="met-shines" className="met-shines">
          <div className="met-shines-container">
            <div className="section-title">
              <h2>MET Shines</h2>
              <p>Our Proud Achievers</p>
            </div>
            
            {shines.length > 0 && (
              <div className="slider-container" ref={sliderRef}>
                <div 
                  className="slider-track" 
                  style={{ 
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: 'transform 0.5s ease-in-out'
                  }}
                >
                  {shines.map((shine, index) => (
                    <div key={shine.id} className="slide">
                      <img src={shine.url} alt={`Success Story ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}
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

{/* Top Recruiters Section */}
<section id="top-recruiters" className="top-recruiters">
  <div className="recruiters-container">
    <div className="section-title">
      <h2>Our Top Recruiters</h2>
      <p>Leading companies that trust our graduates</p>
    </div>
    
    <div className="recruiters-slider">
      <div className="slider-track">
        {/* Render the logos twice for seamless loop */}
        {[...topRecruiters, ...topRecruiters].map((recruiter, index) => (
          <div key={`${recruiter.id}-${index}`} className="recruiter-logo">
            <img 
              src={recruiter.logo} 
              alt={recruiter.name}
              title={recruiter.name}
            />
          </div>
        ))}
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