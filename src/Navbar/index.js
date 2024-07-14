
import React from 'react';
import './index.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='nav-links'>
    <a className='nav-item'><Link to="home" smooth={true} duration={500}>Home</Link></a>
    <a className='nav-item'><Link to="about" smooth={true} duration={500}>About</Link></a>
    <a className='nav-item'><Link to="blog" smooth={true} duration={500}>Blog</Link></a>
    <a className='nav-item'><Link to="contact" smooth={true} duration={500}>Contact</Link></a>
      </div>
    
  );
};

export default Navbar;

