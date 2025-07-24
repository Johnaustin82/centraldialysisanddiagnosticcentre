import React, { useState, useEffect } from 'react';
// import './navbar.css';

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Event listener for document click to close menu (with improved click detection)
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isMenuOpen && !event.target.closest('.glass-navbar')) {
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);

//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [isMenuOpen]);

//   return (
//     <header className="glass-navbar">
//       <div className="logo">
//         <img src="/Img/logo.png" alt="Your Logo" />
//       </div>
//       <nav className="nav-links">
//         <ul className="hidden md:flex"> {/* Hide on small screens */}
//           <li><a href="#homepage-section" className="nav-button">Home</a></li>
//           <li><a href="#aboutus-section" className="nav-button">About Us</a></li>
//           <li><a href="#footer-section" className="nav-button">Contact Us</a></li>
//           <li><a href="#map-section" className="nav-button">Location</a></li>
//         </ul>
//         <button className="md:hidden" onClick={toggleMenu}>
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//           </svg>
//         </button>
//       </nav>

//       <div
//         className={`md:hidden absolute top-0 right-0 p-4 bg-white shadow-md rounded-md transform duration-300 ease-in-out ${
//           isMenuOpen ? 'translate-y-0' : '-translate-y-full'
//         }`}
//       >
//         <ul>
//           <li>
//             <a
//               href="#homepage-section"
//               className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white"
//               onClick={() => setIsMenuOpen(false)} /* Close menu after clicking */
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#aboutus-section"
//               className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               About Us
//             </a>
//           </li>
//           <li>
//             <a
//               href="#footer-section"
//               className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Contact Us
//             </a>
//           </li>
//           <li>
//             <a
//               href="#map-section"
//               className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Location
//             </a>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// }

// export default Navbar;



// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Event listener for document click to close menu
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isMenuOpen && !event.target.closest('.glass-navbar')) {
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);

//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [isMenuOpen]);

//   return (
//     <header className="glass-navbar fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <img 
//               src="/Img/logo.png" 
//               alt="Your Logo" 
//               className="h-8 w-auto filter drop-shadow-sm"
//             />
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             <a 
//               href="#homepage-section" 
//               className="text-blue-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
//             >
//               Home
//             </a>
//             <a 
//               href="#aboutus-section" 
//               className="text-blue-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
//             >
//               About Us
//             </a>
//             <a 
//               href="#footer-section" 
//               className="text-blue-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
//             >
//               Contact Us
//             </a>
//             <a 
//               href="#ourservices-section" 
//               className="text-blue-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
//             >
//               our services
//             </a>
//             <a 
//               href="#map-section" 
//               className="text-blue-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
//             >
//               Location
//             </a>
//           </nav>

//           {/* Mobile menu button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50 transition-all duration-300"
//             aria-expanded={isMenuOpen}
//             aria-label="Toggle navigation menu"
//           >
//             <svg 
//               className={`h-6 w-6 transform transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
//               fill="none" 
//               viewBox="0 0 24 24" 
//               stroke="currentColor"
//             >
//               {isMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <div
//         className={`md:hidden absolute top-full left-0 right-0 bg-white/10 backdrop-blur-md border-b border-white/20 transform transition-all duration-300 ease-in-out ${
//           isMenuOpen 
//             ? 'opacity-100 translate-y-0' 
//             : 'opacity-0 -translate-y-4 pointer-events-none'
//         }`}
//       >
//         <div className="px-4 pt-2 pb-4 space-y-1">
//           <a
//             href="#homepage-section"
//             className="block px-3 py-2 rounded-md text-blue-800 hover:text-black  font-medium transition-all duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Home
//           </a>
//           <a
//             href="#aboutus-section"
//             className="block px-3 py-2 rounded-md text-blue-800 hover:text-black font-medium transition-all duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             About Us
//           </a>
//           <a
//             href="#footer-section"
//             className="block px-3 py-2 rounded-md text-blue-800 hover:text-black font-medium transition-all duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Contact Us
//           </a>
//           <a
//             href="#map-section"
//             className="block px-3 py-2 rounded-md text-blue-800 hover:text-black font-medium transition-all duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Location
//           </a>
//         </div>
//       </div>

//       {/* Mobile menu backdrop */}
//       {isMenuOpen && (
//         <div 
//           className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
//           onClick={() => setIsMenuOpen(false)}
//         />
//       )}
//     </header>
//   );
// }

// export default Navbar;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Event listener for document click to close menu
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
    <header className="glass-navbar fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/Img/logo.png" 
              alt="Your Logo" 
              className="h-8 w-auto filter drop-shadow-sm"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#homepage-section" 
              className="text-blue-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              Home
            </a>
            <a 
              href="#aboutus-section" 
              className="text-blue-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              About Us
            </a>
            <a 
              href="#footer-section" 
              className="text-blue-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              Contact Us
            </a>
            <a 
              href="#ourservices-section" 
              className="text-blue-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              our services
            </a>
            <a 
              href="#map-section" 
              className="text-blue-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              Location
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:text-blue-800 hover:bg-blue-100/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500/50 transition-all duration-300"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg 
              className={`h-6 w-6 transform transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/10 backdrop-blur-md border-b border-white/20 transform transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          <a
            href="#homepage-section"
            className="block px-3 py-2 rounded-md text-blue-800 hover:text-black font-medium transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#aboutus-section"
            className="block px-3 py-2 rounded-md text-blue-800 hover:text-black font-medium transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#footer-section"
            className="block px-3 py-2 rounded-md text-blue-800 hover:text-black font-medium transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </a>
          <a
            href="#ourservices-section"
            className="block px-3 py-2 rounded-md text-blue-800 hover:text-black font-medium transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Services
          </a>
          <a
            href="#map-section"
            className="block px-3 py-2 rounded-md text-blue-800 hover:text-black font-medium transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Location
          </a>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}

export default Navbar;