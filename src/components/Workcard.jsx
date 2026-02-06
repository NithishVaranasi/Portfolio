import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Workcardstyles.css';

const Workcard = ({ imgsrc, title, text, technologies, view, source }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={imgsrc} alt={title} className="project-image" />
        <div className="project-overlay">
          <div className="project-links">
            {view && view !== '#' && (
              <a
                href={view}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label="View Live Demo"
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>
            )}
            {source && (
              <a
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label="View Source Code"
              >
                <FaGithub />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{text}</p>

        {technologies && technologies.length > 0 && (
          <div className="project-technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Workcard;
