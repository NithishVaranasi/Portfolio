import React from 'react';
import Workcard from './Workcard';
import Workcarddata from './Workcarddata';
import './Workcardstyles.css';

const Work = () => {
  return (
    <div className="work-section">
      <div className="work-container container">
        {/* Header */}
        <div className="work-header">
          <span className="work-label">Portfolio</span>
          <h2 className="work-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="work-description">
            A showcase of my recent work, demonstrating expertise in web development,
            machine learning, and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="project-grid">
          {Workcarddata.map((project, index) => (
            <Workcard
              key={index}
              imgsrc={project.imgsrc}
              title={project.title}
              text={project.text}
              technologies={project.technologies}
              view={project.view}
              source={project.source}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="work-footer">
          <p>Want to see more of my work?</p>
          <a
            href="https://github.com/NithishVaranasi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <span>Visit My GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
