import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <header className="glass-navbar">
      <div className="logo">
        <img src="src/components/Img/logo.png" alt="Your Logo" /> 
        
      </div>
      <nav className="nav-links">
        <button className="nav-button">Home</button>
        <button className="nav-button">About Us</button>
        <button className="nav-button">Contact Us</button>
        <button className="nav-button">Location</button>
      </nav>
    </header>
  );
}

export default Navbar;