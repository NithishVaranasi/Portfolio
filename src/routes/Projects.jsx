import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer1';
import Heroimg2 from '../components/Heroimg2';
import Work from '../components/Work';

const Projects = () => {
  return (
    <div className="page">
      <Navbar />
      <Heroimg2
        heading="My Projects"
        text="A showcase of my latest work and creative solutions"
      />
      <Work />
      <Footer />
    </div>
  );
};

export default Projects;
