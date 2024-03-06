import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer1'
import Heroimg2 from '../components/Heroimg2'
import AboutContent from '../components/AboutContent'
const About = () => {
  return (
     <div>
      <Navbar/>
      <Heroimg2 heading="Know Me" text="I'm a Front-end Developer & Jr.ML Engineer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
   
}

export default About