import { Link } from "react-router-dom"
import "./NavbarStyle.css"
import {FaBars, FaTimes} from "react-icons/fa"

import React, { useState } from 'react'

const Navbar = () => {

  const [click,setClick] = useState(false);
  const handleClick= () =>setClick(!click);

  return (
    <div className="header">
      <Link to="/">
        <h1>RASHID-RIZA</h1>
      </Link>
    <ul className= {click ? "nav-menu.active" :
    "nav-menu"}>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/project">PROJECT</Link></li>
      <li><Link to="/about">ABOUT</Link></li>
      <li><Link to="/contact">CONTACT</Link></li>
    </ul>  
    <div className="hamburger" 
    onClick={handleClick}>
      {click ? (<FaTimes size={20} style={{color:"#fff"}}/>
      ): (
      <FaBars size={20} style={{color:"#fff" 
    }}/>
     )}  
    </div>
    </div>
  );
};

export default Navbar
