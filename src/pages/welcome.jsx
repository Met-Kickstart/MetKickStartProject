import React, { useState, useEffect } from 'react';
import { 
  FaGraduationCap, FaSignInAlt, FaMoon, FaSun, FaUniversity,
  FaGoogle, FaMicrosoft, FaBuilding, FaTimes, FaCheckCircle,
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube,
  FaAngleRight, FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart
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

  // Show welcome toast after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      showToast('Welcome to METkickstart Placement Portal!');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <div className="welcome-page">
      {/* Floating particles background */}
      <div className="particles">{particles}</div>
      
      {/* MET Branding */}
      <div className="met-badge">
        <FaUniversity />
        <span>MET Bhujbal Knowledge City, Nashik</span>
      </div>
      
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onLoginClick={() => setShowLoginModal(true)} 
      />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Shaping Careers, Building Futures</h2>
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
          
          <a href="#drives" className="cta-button">View Current Drives</a>
        </div>
      </section>
      
      {/* College Information */}
      <section id="about" className="college-info">
        <div className="section-title">
          <h2>About Our Institute</h2>
          <p>Premier educational institution dedicated to excellence in management and technical education</p>
        </div>
        
        <div className="info-grid">
          <div className="info-card">
            <div className="card-img">
              <img src="https://www.met.edu/uploadfile/images/MET_Nashik.jpg" alt="Campus" />
            </div>
            <div className="card-content">
              <h3>Our Campus</h3>
              <p>Spread over 25 acres of lush green campus with state-of-the-art infrastructure, modern classrooms, and advanced laboratories at Adgaon, Nashik.</p>
              <a href="#" className="read-more">Explore Campus <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
          
          <div className="info-card">
            <div className="card-img">
              <img src="https://www.campusoption.com/images/colleges/gallery/20_12_16_051815_Graduation.png" alt="Academics" />
            </div>
            <div className="card-content">
              <h3>Academic Excellence</h3>
              <p>Industry-aligned curriculum taught by experienced faculty with a perfect blend of theoretical knowledge and practical skills across multiple disciplines.</p>
              <a href="#" className="read-more">View Programs <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
          
          <div className="info-card">
            <div className="card-img">
              <img src="https://content3.jdmagicbox.com/comp/nashik/53/0253p253std9001153/catalogue/met-bhujbal-knowledge-city-adgaon-naka-nashik-computer-training-institutes-for-it-g3w1b8d4s1.jpg" alt="Placements" />
            </div>
            <div className="card-content">
              <h3>Placement Cell</h3>
              <p>Dedicated placement cell that provides training, career guidance, and industry connections to ensure student success in the competitive job market.</p>
              <a href="#" className="read-more">Placement Process <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Active Drives */}
      <section id="drives" className="active-drives">
        <div className="drives-container">
          <div className="section-title">
            <h2>Current Placement Drives</h2>
            <p>Ongoing recruitment opportunities for our students</p>
          </div>
          
          <div className="drives-grid">
            <div className="drive-card">
              <div className="drive-header">
                <div className="drive-title">Campus Recruitment Drive</div>
                <div className="drive-date">Ongoing</div>
              </div>
              <div className="drive-content">
                <div className="company-info">
                  <div className="company-logo">
                    <FaGoogle />
                  </div>
                  <div className="company-details">
                    <h4>Google India</h4>
                    <p>Software Development Roles</p>
                  </div>
                </div>
                <div className="drive-details">
                  <div className="detail-item">
                    <i className="fas fa-briefcase"></i>
                    <span>Roles: Software Engineer, Data Analyst, Product Manager</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-graduation-cap"></i>
                    <span>Eligibility: 2024 Batch, Min 7.5 CGPA</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Location: Bangalore, Hyderabad</span>
                  </div>
                </div>
                <div className="applied-count"><strong>142</strong> students applied</div>
              </div>
            </div>
            
            <div className="drive-card">
              <div className="drive-header">
                <div className="drive-title">Summer Internship Program</div>
                <div className="drive-date">Closes: 15 Oct</div>
              </div>
              <div className="drive-content">
                <div className="company-info">
                  <div className="company-logo">
                    <FaMicrosoft />
                  </div>
                  <div className="company-details">
                    <h4>Microsoft India</h4>
                    <p>Technology Internships</p>
                  </div>
                </div>
                <div className="drive-details">
                  <div className="detail-item">
                    <i className="fas fa-briefcase"></i>
                    <span>Roles: Software Development Intern, Cloud Intern</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-graduation-cap"></i>
                    <span>Eligibility: 2025 Batch, Min 7.0 CGPA</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Location: Hyderabad, NCR</span>
                  </div>
                </div>
                <div className="applied-count"><strong>98</strong> students applied</div>
              </div>
            </div>
            
            <div className="drive-card">
              <div className="drive-header">
                <div className="drive-title">Management Trainee Program</div>
                <div className="drive-date">Starts: 5 Nov</div>
              </div>
              <div className="drive-content">
                <div className="company-info">
                  <div className="company-logo">
                    <FaBuilding />
                  </div>
                  <div className="company-details">
                    <h4>Tata Consultancy Services</h4>
                    <p>Business Management Roles</p>
                  </div>
                </div>
                <div className="drive-details">
                  <div className="detail-item">
                    <i className="fas fa-briefcase"></i>
                    <span>Roles: Business Analyst, Project Manager</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-graduation-cap"></i>
                    <span>Eligibility: MBA 2024 Batch, All Streams</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Location: Pan India</span>
                  </div>
                </div>
                <div className="applied-count"><strong>76</strong> students applied</div>
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
          </div>
          
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
        </div>
      </section>
      
      {/* Achievements Section */}
      <section id="achievements" className="achievements">
        <div className="achievements-container">
          <div className="section-title">
            <h2>Our Achievements</h2>
            <p>Proud milestones and recognitions of MET Bhujbal Knowledge City</p>
          </div>
          
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="achievement-content">
                <h3>NBA Accreditation</h3>
                <p>5 UG Programs accredited till 2027 by National Board of Accreditation</p>
              </div>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-medal"></i>
              </div>
              <div className="achievement-content">
                <h3>Top B School</h3>
                <p>Ranked 13th best B School in South Asia by Asia Inc.</p>
              </div>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-award"></i>
              </div>
              <div className="achievement-content">
                <h3>'A++' Grade</h3>
                <p>Recognized with 'A++' grade by Business India magazine</p>
              </div>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="achievement-content">
                <h3>West India Ranking</h3>
                <p>4th best B School in West India by DNA</p>
              </div>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="achievement-content">
                <h3>SPPU Affiliation</h3>
                <p>Permanent affiliation from Savitribai Phule Pune University</p>
              </div>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-microscope"></i>
              </div>
              <div className="achievement-content">
                <h3>Research Excellence</h3>
                <p>4 Ph.D. awards in 2017 with recognized research center status</p>
              </div>
            </div>
          </div>
          
          <div className="achievement-description">
            <p>MET Bhujbal Knowledge City has consistently achieved excellence in education, with our Computer Engineering program receiving NBA accreditation extension until 2027. Our students regularly win national competitions, including 1st prize in the V.B. Kolte COE project competition. The institute has been recognized as a research center and maintains permanent affiliation with Savitribai Phule Pune University.</p>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="testimonials-container">
          <div className="section-title">
            <h2>Success Stories</h2>
            <p>What our students and recruiters say about us</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The placement cell at MET Bhujbal Knowledge City provided exceptional support throughout my job search. Their industry connections and interview preparation workshops helped me secure a position at Google India with a package of ₹15 LPA."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Riya Sharma" />
                </div>
                <div className="author-info">
                  <h4>Riya Sharma</h4>
                  <p>Software Engineer, Google India</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"As a recruiter, I'm consistently impressed by the quality of students from MET Bhujbal Knowledge City. Their technical skills and professional attitude make them valuable additions to our organization."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Rajiv Mehta" />
                </div>
                <div className="author-info">
                  <h4>Rajiv Mehta</h4>
                  <p>HR Manager, TCS</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The industry-aligned curriculum and practical training at MET gave me the confidence to excel in my career. I secured three job offers before graduation and joined Microsoft as a Cloud Solutions Architect."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="Amit Patel" />
                </div>
                <div className="author-info">
                  <h4>Amit Patel</h4>
                  <p>Cloud Architect, Microsoft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to kickstart your career?</h2>
          <p>Join MET Bhujbal Knowledge City and become part of our success story with 96% placement rate and top recruiters.</p>
          <a href="#" className="cta-button-white" onClick={(e) => { e.preventDefault(); setShowApplyModal(true); }}>Apply Now</a>
        </div>
      </section>
      
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