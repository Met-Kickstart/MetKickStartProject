/*  src/components/Footer.jsx  */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaAngleRight,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaHeart
} from 'react-icons/fa';

const SOCIAL_LINKS = {
  facebook : 'https://www.facebook.com/metbkc',
  twitter  : 'https://twitter.com/metbkc',
  linkedin : 'https://www.linkedin.com/school/met-bhujbal-knowledge-city',
  instagram: 'https://www.instagram.com/metbkc',
  youtube  : 'https://www.youtube.com/c/metbkc'
};

const Footer = () => (
  <footer id="contact" className="footer">
    <div className="footer-container">
      {/* ───────────────── About ───────────────── */}
      <div className="footer-col">
        <h4>About Institute</h4>
        <p>
          Premier educational institution dedicated to excellence in
          management and technical education, research, and innovation.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>
              MET Bhujbal Knowledge City, Adgaon, Nashik, Maharashtra 422003
            </span>
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

      {/* ───────────────── Quick Links ───────────────── */}
      <div className="footer-col">
        <h4>Quick Links</h4>
        <ul className="footer-links">
          <li>
            <Link to="/about">
              <FaAngleRight /> About Us
            </Link>
          </li>
          <li>
            <Link to="/programs">
              <FaAngleRight /> Academic Programs
            </Link>
          </li>
          <li>
            <Link to="/admissions">
              <FaAngleRight /> Admissions
            </Link>
          </li>
          <li>
            <Link to="/research">
              <FaAngleRight /> Research
            </Link>
          </li>
          <li>
            <Link to="/campus-life">
              <FaAngleRight /> Campus Life
            </Link>
          </li>
        </ul>
      </div>

      {/* ───────────────── Placement Resources ───────────────── */}
      <div className="footer-col">
        <h4>Placement Resources</h4>
        <ul className="footer-links">
          <li>
            <Link to="/placement-brochure">
              <FaAngleRight /> Placement Brochure
            </Link>
          </li>
          <li>
            <Link to="/recruiter-info">
              <FaAngleRight /> Recruiter Information
            </Link>
          </li>
          <li>
            <Link to="/student-preparation">
              <FaAngleRight /> Student Preparation
            </Link>
          </li>
          <li>
            <Link to="/past-recruiters">
              <FaAngleRight /> Past Recruiters
            </Link>
          </li>
          <li>
            <Link to="/placement-policy">
              <FaAngleRight /> Placement Policy
            </Link>
          </li>
        </ul>
      </div>

      {/* ───────────────── Social Media ───────────────── */}
      <div className="footer-col">
        <h4>Connect With Us</h4>
        <p>Follow us on social media for updates and announcements.</p>

        <div className="social-links">
          <Link
            to={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </Link>

          <Link
            to={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </Link>

          <Link
            to={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </Link>

          <Link
            to={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Link>

          <Link
            to={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>

    {/* ───────────────── Copyright ───────────────── */}
    <div className="copyright">
      <p>
        &copy; 2025 MET Bhujbal Knowledge City, Adgaon Nashik. All Rights Reserved.
        | Designed with{' '}
        <FaHeart style={{ color: 'var(--primary)' }} /> for Excellence
      </p>
    </div>
  </footer>
);

export default Footer;
