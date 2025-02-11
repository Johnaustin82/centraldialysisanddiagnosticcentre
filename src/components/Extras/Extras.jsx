import React, { useState, useEffect } from "react";
import "./extras.css";

const Extras = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCardIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredCardIndex(null);
  };

  return (
    <div className="extras-container">
      {/* First Card */}
      <div 
        className={`group ${hoveredCardIndex === 0 ? 'hovered' : ''}`} 
        onMouseEnter={() => handleMouseEnter(0)} 
        onMouseLeave={handleMouseLeave}
      >
        <div className="profile-picture">
          <img
            src="/Img/extras_1.png"
            alt="learn About Kidneys"
          />
        </div>
        <div className="profile-details">
          <span className="profile-name">Learn about Kidneys</span>
          {/* <p className="profile-role">Learn more</p> */} {/* Removed for cleaner design */}
          {/* Conditional rendering of extra info */}
          {hoveredCardIndex === 0 && (
            <div className="extra-info">
              {/* Add your extra information here */}
              <p>The kidneys play a vital role in filtering waste and maintaining the body's fluid. For dialysis patients, managing diet, fluid intake, and medications is crucial to support overall health and treatment outcomes. </p> 
            </div>
          )}
        </div>
      </div>

      {/* Second Card */}
      <div 
        className={`group ${hoveredCardIndex === 1 ? 'hovered' : ''}`} 
        onMouseEnter={() => handleMouseEnter(1)} 
        onMouseLeave={handleMouseLeave}
      >
        <div className="profile-picture">
          <img
            src="/Img/10.png"
            alt="10 plus"
          />
        </div>
        <div className="profile-details">
          <span className="profile-name">Decade plus working with you</span>
          {/* <p className="profile-role">Learn more</p> */} {/* Removed for cleaner design */}
          {/* Conditional rendering of extra info */}
          {hoveredCardIndex === 1 && (
            <div className="extra-info">
              {/* Add your extra information here */}
              <p>TWe sincerely thank you for being part of our journey since 2012. Your trust and we are truly grateful for the opportunity to serve you. </p> 
            </div>
          )}
        </div>
      </div>

      {/* Third Card */}
      <div 
        className={`group ${hoveredCardIndex === 2 ? 'hovered' : ''}`} 
        onMouseEnter={() => handleMouseEnter(2)} 
        onMouseLeave={handleMouseLeave}
      >
        <div className="profile-picture">
          <img
            src="/Img/calender.png"
            alt="calender"
          />
        </div>
        <div className="profile-details">
          <span className="profile-name">Mark your visiting days</span>
          {/* <p className="profile-role">Learn more</p> */} {/* Removed for cleaner design */}
          {/* Conditional rendering of extra info */}
          {hoveredCardIndex === 2 && (
            <div className="extra-info">
              {/* Add your extra information here */}
              <p>Regular checkups and staying informed about your condition can make a significant difference in your journey. Always consult your healthcare provider for personalized advice.</p> 
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Extras;