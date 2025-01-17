import React from 'react';
import './navbar.css';

function Navbar() {
  // Function to handle navigation
  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="glass-navbar">
      <div className="logo">
        <img src="src/components/Img/logo.png" alt="Your Logo" /> 
      </div>
      <nav className="nav-links">
        <button 
          className="nav-button" 
          onClick={() => handleNavigation('homepage-section')}
        >
          Home
        </button>
        <button 
          className="nav-button" 
          onClick={() => handleNavigation('aboutus-section')}
        >
          About Us
        </button>
        <button 
          className="nav-button" 
          onClick={() => handleNavigation('footer-section')}
        >
          Contact Us
        </button>
        <button 
          className="nav-button" 
          onClick={() => handleNavigation('map-section')}
        >
          Location
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
