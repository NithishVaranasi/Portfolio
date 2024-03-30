import React from 'react'
import "./Heroimgstyles.css"
import IntroImg from "../assets/port.jpg"
import { Link } from 'react-router-dom'
const Heroimg = () => {
  return <div className='hero'>
    <div className='mask'>
        <img className='into-img' src={IntroImg} alt='IntroImg'/>
    </div>
    <div className='content'>
        <h1>HI, Know About Me..</h1>
        <p>I'm Developer</p>
        <div>
            <Link to ="/about" className='btn'>About Me</Link>
            <Link to ="/contact us" className='btn btn-light'>Contact Me</Link>
        </div>
    </div>
  </div>
  
}

export default Heroimg