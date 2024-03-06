import "./Workcardstyles.css"
import Workcard from "./Workcard"
import Workcarddata from "./Workcarddata"
import React from 'react'
const Work = () => {
  return <div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
        {Workcarddata.map((val,ind)=>{
            return(
                <Workcard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}text={val.text}
                    view={val.view}
                    source={val.source}
                />
            )
        })}
    </div>
  </div>
}

export default Work
