import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Heroimgstyles.css';
import IntroImg from '../assets/port.jpg';

const Heroimg = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const roles = ['Full Stack Developer', 'ML Engineer', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="hero">
      {/* Animated background */}
      <div className="hero-background">
        <div className="mask">
          <img className="intro-img" src={IntroImg} alt="Portfolio Background" />
        </div>
        <div className="hero-overlay"></div>
        <div
          className="gradient-orb gradient-orb-1"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div
          className="gradient-orb gradient-orb-2"
          style={{
            transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`,
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="hero-content container">
        <div className="hero-text-container">
          <div className="hero-greeting">
            <span className="wave">👋</span>
            <span>Hello, I'm</span>
          </div>

          <h1 className="hero-title">
            <span className="name-highlight">Nithish Bhavan Varanasi</span>
          </h1>

          <div className="hero-role-container">
            <span className="role-label">I'm a </span>
            <span className="role-dynamic">{roles[roleIndex]}</span>
          </div>

          <p className="hero-description">
            I craft beautiful, responsive websites and intelligent machine learning solutions
            that transform ideas into reality. Passionate about creating seamless digital
            experiences that make a difference.
          </p>

          {/* Social links */}
          <div className="hero-social">
            <a
              href="https://github.com/NithishVaranasi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nithish-bhavan-varanasi-58ab53224/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:varanasinithish@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              <span>View My Work</span>
              <FaArrowRight className="arrow-icon" />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll to explore</p>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{ '--i': i }}></div>
        ))}
      </div>
    </div>
  );
};

export default Heroimg;
