import React from 'react';
import './Heroimg2styles.css';

const Heroimg2 = ({ heading, text }) => {
  return (
    <div className="hero-img">
      <div className="hero-img-overlay"></div>
      <div className="heading-container">
        <div className="heading-content">
          <h1 className="page-heading">{heading}</h1>
          {text && <p className="page-subheading">{text}</p>}
          <div className="heading-decoration">
            <span className="decoration-line"></span>
            <span className="decoration-dot"></span>
            <span className="decoration-line"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroimg2;
