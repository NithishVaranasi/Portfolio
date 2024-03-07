import "./AboutContentStyles.css"
import { Link } from "react-router-dom"
import React from 'react'
import con from "../assets/con.png"
import conn from "../assets/conn.png"
const AboutContent = () => {
  return <div className="about">
    <div className="left">
        <h1>Who Are You🤔👇</h1>
        <h2>U R knowing about me😊</h2>
        <p>I'm Front-End Developer and ML Junior Engineer. I create responsive websites and Applicatons. I'm capable to do Machine Learning and Deep Learning projects. I do projects for my clients.</p>
        <Link to="/Contact us">
            <button className="btn">Contact Me</button>
        </Link>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={con} className="img"alt="true" />
            </div>
            <div className="img-stack bottom">
                <img src={conn} className="img"alt="true" />
            </div>
        </div>
    </div>
    </div>

}

export default AboutContent