import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer1';
import Heroimg2 from '../components/Heroimg2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div className="page">
      <Navbar />
      <Heroimg2
        heading="Let's Connect"
        text="Have a project in mind? Let's discuss how we can work together"
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
