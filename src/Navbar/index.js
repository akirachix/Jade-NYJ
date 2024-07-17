
import React from 'react';
import './index.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='nav-links'>
    <a className='nav-item'><Link to="Home" smooth={true} duration={500}>Home</Link></a>
    <a className='nav-item'><Link to="Blog" smooth={true} duration={500}>Blog</Link></a>
    <a className='nav-item'><Link to="Portfolio" smooth={true} duration={500}>Portfolio</Link></a>
    <a className='nav-item'><Link to="Podcast" smooth={true} duration={500}>Podcast</Link></a>
    <a className='nav-item'><Link to="Video" smooth={true} duration={500}>Video</Link></a>
      </div>
    
  );
};

export default Navbar;

