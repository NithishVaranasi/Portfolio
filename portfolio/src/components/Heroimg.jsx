import React from 'react'
import "./Heroimgstyles.css"
import IntroImg from "../assets/port.jpg"
import ProfileImg from "../assets/Imgpro.jpg"
import { Link } from 'react-router-dom'
const Heroimg = () => {
  return <div className='hero'>
    <div className='mask'>
        <img className='into-img' src={IntroImg} alt='IntroImg'/>
    </div>
    <div className ='proimg'>
      <img className='img-profile' src={ProfileImg} alt='ProfileImg'/>
    </div>
    <div className='content'>
        <p>HI, Know About Me..</p>
        <h1>I'm Developer</h1>
        <div>
            <Link to ="/about" className='btn'>About Me</Link>
            <Link to ="/contact us" className='btn btn-light'>Contact Me</Link>
        </div>
    </div>
  </div>
  
}

export default Heroimg