import React from 'react';
import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, 
  FaAngleRight, FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h4>About Institute</h4>
          <p>Premier educational institution dedicated to excellence in management and technical education, research, and innovation.</p>
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>MET Bhujbal Knowledge City, Adgaon, Nashik, Maharashtra 422003</span>
            </div>
            <div className="contact-item">
              <FaPhone />
              <span>+91 253 662 2100</span>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <span>placement@metbkc.edu.in</span>
            </div>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#"><FaAngleRight /> About Us</a></li>
            <li><a href="#"><FaAngleRight /> Academic Programs</a></li>
            <li><a href="#"><FaAngleRight /> Admissions</a></li>
            <li><a href="#"><FaAngleRight /> Research</a></li>
            <li><a href="#"><FaAngleRight /> Campus Life</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Placement Resources</h4>
          <ul className="footer-links">
            <li><a href="#"><FaAngleRight /> Placement Brochure</a></li>
            <li><a href="#"><FaAngleRight /> Recruiter Information</a></li>
            <li><a href="#"><FaAngleRight /> Student Preparation</a></li>
            <li><a href="#"><FaAngleRight /> Past Recruiters</a></li>
            <li><a href="#"><FaAngleRight /> Placement Policy</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Connect With Us</h4>
          <p>Follow us on social media for updates and announcements.</p>
          <div className="social-links">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; 2025 MET Bhujbal Knowledge City, Adgaon Nashik. All Rights Reserved. | Designed with <FaHeart style={{ color: 'var(--primary)' }} /> for Excellence</p>
      </div>
    </footer>
  );
};

export default Footer;