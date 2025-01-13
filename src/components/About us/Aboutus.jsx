import React, { useState, useEffect } from 'react';
import './aboutus.css';

const AboutUs = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'src/components/Img/reception.jpg',
    'src/components/Img/dialysismachine.jpg',
    'src/components/Img/doc.png',
    // Add more image paths here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="about">
        <div className="left">
          <h1>About us</h1>
          <hr />
          <p>We are specialized in Dialysis and customized Service to Kidney patients in a caring way.</p>

          <p>We currently have 6 dialysis machines which are fully working.</p>
          <ul>
            <li>1 Doctor</li>
            <li>1 Clinical Officer</li>
            <li>4 Nurses</li>
          </ul> 
        </div>
        <div className="right">
          <img src={images[currentImageIndex]} alt="About us image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;