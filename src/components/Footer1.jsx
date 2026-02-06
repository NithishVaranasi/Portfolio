import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowUp,
} from 'react-icons/fa';
import './Footerstyles.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">Nithish</span>
              <span className="logo-accent">Varanasi</span>
            </div>
            <p className="footer-about">
              Full Stack Developer passionate about creating beautiful, functional, and
              user-friendly digital experiences. Let's build something amazing together!
            </p>
            <div className="footer-social">
              <a
                href="https://github.com/NithishVaranasi"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/nithish-bhavan-varanasi-58ab53224/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:varanasinithish@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="footer-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Get In Touch</h4>
            <ul className="footer-contact">
              <li className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>GodavariKhani, Peddapalli, India</span>
              </li>
              <li className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+919553123710">+91 9553123710</a>
              </li>
              <li className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:varanasinithish@gmail.com">varanasinithish@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Nithish Bhavan Varanasi. Made with <FaHeart className="heart-icon" />{' '}
            in India
          </p>
          <p className="footer-credits">All rights reserved</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
