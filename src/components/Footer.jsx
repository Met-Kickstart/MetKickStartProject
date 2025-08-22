/*  src/components/Footer.jsx  */
import React from 'react';
import { FaPhone, FaEnvelope, FaUserTie, FaHeart } from 'react-icons/fa';

const Footer = () => (
  <footer id="contact" className="footer">
    <div className="footer-container">
      <h4>Career Development Cell</h4>
      <div className="contact-grid">
        {/* Left Column - Deepaq Vartak */}
        <div className="contact-column left">
          <div className="contact-item">
            <span><FaUserTie style={{ color: '#d32f2f' }} /> Mr. Deepaq Vartak</span>
            <span>Director-Career Development Cell</span>
            <span><FaPhone style={{ color: '#d32f2f' }} /> +91 93202 20234</span>
            <span><FaEnvelope style={{ color: '#d32f2f' }} /> deepaq@bkc.met.edu</span>
          </div>
        </div>

        {/* Center Column - Vijayraghvan */}
        <div className="contact-column center">
          <div className="contact-item">
            <span><FaUserTie style={{ color: '#d32f2f' }} /> Mr. Vijayraghvan Sayikrishnan</span>
            <span>Training & Placement Officer</span>
            <span><FaPhone style={{ color: '#d32f2f' }} /> +91 9372938918</span>
            <span><FaEnvelope style={{ color: '#d32f2f' }} /> mbaplacement_iom@bkc.met.edu</span>
          </div>
        </div>

        {/* Right Column - Swarupa */}
        <div className="contact-column right">
          <div className="contact-item">
            <span><FaUserTie style={{ color: '#d32f2f' }} /> Ms. Swarupa Khedkar</span>
            <span>Placement Executive</span>
            <span><FaPhone style={{ color: '#d32f2f' }} /> +91 7499916261</span>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>&copy; 2025 MET Bhujbal Knowledge City, Adgaon Nashik. All Rights Reserved.
        | Designed with <FaHeart style={{ color: 'var(--primary)' }} /> for Excellence</p>
    </div>
  </footer>
);

export default Footer;
