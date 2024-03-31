import "./Workcardstyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"
const Workcard = (props) => {
  return (
    <div className="project-card">
            <img src={props.imgsrc} alt="image"/>
            <h4 className="project-title">{props.title}</h4>
            <div className="pro-details">
                <p>{props.text}</p>
                    <div className="pro-btns">
                        {/* <NavLink to={props.view} className="btn">View</NavLink> */}
                        <NavLink to={props.source} className="btn">Source</NavLink>
                    </div>
            </div>
        </div>
  )
}

export default Workcard
