import React, { useState, useEffect } from 'react';
import './navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Event listener for document click to close menu (with improved click detection)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.glass-navbar')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="glass-navbar">
      <div className="logo">
        <img src="src/components/Img/logo.png" alt="Your Logo" />
      </div>
      <nav className="nav-links">
        <ul className="hidden md:flex"> {/* Hide on small screens */}
          <li><a href="#homepage-section" className="nav-button">Home</a></li>
          <li><a href="#aboutus-section" className="nav-button">About Us</a></li>
          <li><a href="#footer-section" className="nav-button">Contact Us</a></li>
          <li><a href="#map-section" className="nav-button">Location</a></li>
        </ul>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>

      <div
        className={`md:hidden absolute top-0 right-0 p-4 bg-white shadow-md rounded-md transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul>
          <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white" onClick={toggleMenu}>Home</a></li>
          <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white" onClick={toggleMenu}>About Us</a></li>
          <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white" onClick={toggleMenu}>Contact Us</a></li>
          <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white" onClick={toggleMenu}>Location</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;