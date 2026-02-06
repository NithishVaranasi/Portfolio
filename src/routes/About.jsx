import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer1';
import Heroimg2 from '../components/Heroimg2';
import AboutContent from '../components/AboutContent';
import Skills from '../components/Skills';

const About = () => {
  return (
    <div className="page">
      <Navbar />
      <Heroimg2 heading="About Me" text="Passionate Developer & Problem Solver" />
      <AboutContent />
      <Skills />
      <Footer />
    </div>
  );
};

export default About;
