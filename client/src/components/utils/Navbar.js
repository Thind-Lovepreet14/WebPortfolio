import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav-container">
            <div className="img-container">
                <img src="/img/lovepreet.jpeg" alt="Lovepreet Thind" />
            </div>
            <h3>Lovepreet Thind</h3>
            <div className="list-container">
                <ul>
                    <li><a href="#home" className="active">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#portfolio">PORTFOLIO</a></li>
                    <li><a href="#contact">CONTACT ME</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;