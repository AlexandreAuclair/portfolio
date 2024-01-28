import "./NavbarStyle.css"

import React from 'react'
import { Link } from "react-router-dom"

import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
        <div className="logo">
            <Link to="/">
                <h1>Alexandre Auclair</h1>
            </Link>
        </div>
        <div>
            <ul className="nav-menu">
                <li>
                    <Link to="mailto:alexandre26auclair@gmail.com">
                        <SiGmail />
                    </Link>
                </li>
                <li>
                    <Link to="https://github.com/AlexandreAuclair">
                        <FaGithub />
                    </Link>
                </li>
                <li>
                    <Link to="https://www.linkedin.com/in/alexandre-auclair-932647220/">
                        <FaLinkedin />
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar