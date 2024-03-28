import React from 'react';
import { FaPython, FaJs, FaReact } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { DiPython, DiJsBadge, DiReact } from 'react-icons/di';
import './Skillsstyles.css'

const Skills = () => {
    return (
        <div className="skills">
            <h2>Skills</h2>
            <div className="skill-icons">
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
                    <DiReact />
                    <span>React Native</span>
                </div>
                <div className="skill">
                    <AiOutlineAntDesign />
                    <span>Ant Design</span>
                </div>
                <div className="skill">
                    <AiOutlineApi />
                    <span>APIs</span>
                </div>
                <div className="skill">
                    <DiPython />
                    <span>Machine Learning</span>
                </div>
                <div className="skill">
                    <DiJsBadge />
                    <span>Deep Learning</span>
                </div>
            </div>
        </div>
    );
};

export default Skills;
