import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer1'
import Heroimg2 from '../components/Heroimg2'
import AboutContent from '../components/AboutContent'
import Skills from '../components/Skills'
const About = () => {
  return (
     <div>
      <Navbar/>
      <Heroimg2 heading="Know Me" text="I'm a Front-end Developer "/>
      <Skills heading="Skills"/>
      <AboutContent/>
      
      <Footer/>
    </div>
  )
   
}

export default About