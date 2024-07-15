
import React, {useState} from 'react';
import "./index.css"
const Navbar = () =>{
    const [isMenuOpen, setlsMenuOpen]=useState(false);
    const toggleMenu = () => {
        setlsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto': 'hidden';
      };
    return(
        <div>
        <nav id='navbar'>
            <img src='/images/Multimedia_Logo-removebg-preview.png' alt='logo' className='logo'/>
            <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div  className={`nav-links ${isMenuOpen ? 'active' :""}`}>
            <a href='#' onClick={toggleMenu}>Home</a>
            <a href='#' onClick={toggleMenu}>Blog</a>
            <a href='#' onClick={toggleMenu}>Portfolio</a>
            <a href='#' onClick={toggleMenu}>Podcast</a>
            <a href='#' onClick={toggleMenu}>Videos</a>
            </div>
            </nav>
            </div>
    )
};
export default Navbar;
