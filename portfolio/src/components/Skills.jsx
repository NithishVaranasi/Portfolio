import React from 'react';
import { FaPython,FaJs, FaLayerGroup, FaReact,FaBullseye } from 'react-icons/fa';
// import { DiPython, DiJsBadge, DiReact } from 'react-icons/di';
import './Skillsstyles.css'
import { Link } from "react-router-dom"

const Skills = () => {
    return (
        <div className="skills">
            <h2 style={{ color: "White" }}>Skills</h2>
            <div className="skill-icons">
            <div className="skill">
                    <FaC />
                    <span>C</span>
                </div>
                <div className="skill">
                    <FaPython />
                    <span>Python</span>
                </div>
                <div className="skill">
                    <FaJs />
                    <span>JavaScript</span>
                </div>
                <div className="skill">
                    <FaReact />
                    <span>React JS</span>
                </div>
                <div className="skill">
                    <FaReact />
                    <span>React Native</span>
                </div>
                <div className="skill">
                    <FaBullseye/>
                    <span>Machine Learning</span>
                </div>
                <div className="skill">
                    <FaLayerGroup/>
                    <span>Deep Learning</span>
                </div>
            </div>
            <Link to="/Contact us">
            <button className="btn">Contact Me</button>
            </Link>
        </div>
    );
};

export default Skills;
