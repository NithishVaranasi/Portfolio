import "./Footerstyles.css";
import React from 'react'
import { FaGithub, FaHome,FaLinkedin,FaMailBulk,FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={30} style={{color:"white",marginRight:"2rem"}}/>
                    <div>
                      <p>GodavariKhani,Peddapalli,India.</p>
                    </div>
                </div>
                <div className="phone">
                  <h4><FaPhone size={30} style={{color:"white",marginRight:"2rem"}}/>
                     <a href="tel:+919553123710">+91 9553123710</a></h4>
                             
                  </div>
                <div className="email">
                <h4><FaMailBulk size={30} style={{color:"white",marginRight:"2rem"}}/> <a href="mailto:varanasinithish@gmail.com">varanasinithish@gmail.com</a></h4>
                   
                </div>
            </div>
            <div className="right">
              <h4>About Me</h4>
              <p>This is your Nithish Bhavan Varanasi. 
                I'm here to support in projects and design challenges. </p>
              <div className="social">
              <a href="https://www.linkedin.com/in/nithish-bhavan-varanasi-58ab53224/"><FaLinkedin size={30} style={{color:"white",marginRight:"2rem"}}/></a>
                <a href="https://github.com/NithishVaranasi/"><FaGithub size={30} style={{color:"white",marginRight:"2rem"}}/></a>
              
              </div>            
            </div>
        </div>
    </div>
  )
}

export default Footer
