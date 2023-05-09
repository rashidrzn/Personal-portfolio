/* eslint-disable jsx-a11y/img-redundant-alt */
import "./HeroImagestyle.css"
import IntoImage from "../assets/background.jpg"
import userimg from "../assets/manUser.png"

import React from 'react'
import { Link } from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className ="into-img" src={IntoImage} alt="background image "/>
      </div>
      <div className="userimg">
        <img className="user-img" src={userimg} alt="user-img" />
      </div>
      <div className="content">
        <p>Hi, I am an undergraduate</p>
        <h1>RASHID RIZAN</h1>
        <div>
            <Link to="/project" className="btn">PROJECTS</Link>
            <Link to="/contact" className="btn-light">CONTACT</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg
