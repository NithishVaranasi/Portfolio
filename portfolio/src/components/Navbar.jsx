import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import React, { useState } from 'react';
import {FaAccusoft, FaTimes} from 'react-icons/fa';


const Navbar = () => {
    const[click,setClick]=useState(false);
    const handleclick=()=>setClick(!click)

    const [color,setColor]=useState(false);
    const changecolor = ()=>{
        if(window.scrollY>=1){
            setColor(true);
        }
        else{
            setColor(false);
        }
    };
    window.addEventListener("scroll",changecolor)
  return (
    <div className={color ? "header header-bg":"header"}>
        <Link to ="/">
            <h1>WeIrD SoLuTiOnS</h1>
        </Link>
        <ul className={click ? "nav-menu active":"nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact us">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleclick}>
           {click ?(
           <FaTimes size={20} style={{color:"orange"}}/>
           ):(
            <FaAccusoft size={20} style={{color:"orange"}}/>
           )}
        </div>
    </div>
  )
}

export default Navbar