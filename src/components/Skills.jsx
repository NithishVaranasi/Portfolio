import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaPython,
  FaJs,
  FaReact,
  FaGitAlt,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiTensorflow,
  SiPytorch,
  SiTailwindcss,
} from 'react-icons/si';
import './Skillsstyles.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React JS', icon: <FaReact />, level: 90 },
        { name: 'React Native', icon: <FaReact />, level: 85 },
        { name: 'JavaScript', icon: <FaJs />, level: 75 },
      ],
    },
    {
      title: 'Machine Learning',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 95 },
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 80 },
        { name: 'PyTorch', icon: <SiPytorch />, level: 75 },
        { name: 'Deep Learning', icon: <FaPython />, level: 80 },
      ],
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'SQL', icon: <FaDatabase />, level: 80 },
      ],
    },
  ];

  return (
    <div className="skills-section">
      <div className="skills-container container">
        {/* Header */}
        <div className="skills-header">
          <span className="skills-label">What I Do Best</span>
          <h2 className="skills-title">
            My <span className="highlight">Technical Skills</span>
          </h2>
          <p className="skills-description">
            A comprehensive set of modern technologies and frameworks that I use to build
            exceptional digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="skill-category"
              style={{ '--delay': `${catIndex * 0.1}s` }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item"
                    style={{ '--skill-delay': `${skillIndex * 0.05}s` }}
                  >
                    <div className="skill-header">
                      <div className="skill-info">
                        <div className="skill-icon">{skill.icon}</div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ '--skill-level': `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="skills-cta">
          <p className="cta-text">Interested in working together?</p>
          <Link to="/contact" className="btn btn-primary">
            <span>Let's Collaborate</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
