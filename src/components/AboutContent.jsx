import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaBrain, FaRocket, FaLaptopCode } from 'react-icons/fa';
import './AboutContentStyles.css';

const AboutContent = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: 'Front-End Development',
      description: 'Expert in React, React Native, and modern web technologies',
    },
    {
      icon: <FaBrain />,
      title: 'Machine Learning',
      description: 'Building intelligent solutions with ML and Deep Learning',
    },
    {
      icon: <FaRocket />,
      title: 'Performance',
      description: 'Creating fast, responsive, and optimized applications',
    },
    {
      icon: <FaLaptopCode />,
      title: 'Full Stack',
      description: 'End-to-end development from concept to deployment',
    },
  ];

  return (
    <div className="about-section">
      <div className="about-container container">
        {/* Main content */}
        <div className="about-content">
          <div className="about-header">
            <span className="about-label">Get to Know Me</span>
            <h2 className="about-title">
              Building Digital Experiences That <span className="highlight">Make a Difference</span>
            </h2>
          </div>

          <div className="about-description">
            <p>
              I'm a passionate Full Stack Developer specializing in creating beautiful, responsive
              websites and intelligent applications. With expertise in both frontend development
              and machine learning, I bring a unique perspective to every project.
            </p>
            <p>
              My journey in tech is driven by curiosity and a commitment to excellence. Whether
              it's crafting pixel-perfect user interfaces or building sophisticated ML models,
              I approach each challenge with creativity and precision.
            </p>
            <p>
              I believe in writing clean, maintainable code and creating solutions that not only
              work flawlessly but also provide exceptional user experiences. Let's collaborate
              to bring your ideas to life!
            </p>
          </div>

          {/* Highlight cards */}
          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card" style={{ '--delay': `${index * 0.1}s` }}>
                <div className="highlight-icon">{item.icon}</div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-description">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="about-cta">
            <Link to="/contact" className="btn btn-primary">
              <span>Let's Work Together</span>
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              <span>View My Projects</span>
            </Link>
          </div>
        </div>

        {/* Stats section */}
        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Technologies Mastered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
