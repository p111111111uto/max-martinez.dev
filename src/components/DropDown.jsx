import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { BiMenu } from "react-icons/bi";

export default function DropDown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button onClick={toggleMenu} className="dropbtn"><BiMenu/></button>
            {isOpen && (
                <div className="dropdown-content">
                    <Link to="/">Home</Link>
                    <Link to="/about-me">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                </div>
            )}
        </div>
    );
}