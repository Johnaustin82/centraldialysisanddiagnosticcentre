import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './aboutus.css';

const AboutUs = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/Img/Reception.jpg',
    '/Img/Vincentatreception.jpg',
    '/Img/waitingarea.jpg',
    '/Img/bed.jpg',
    '/Img/dialysismachine.jpg',
    '/Img/doc.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section">
      <div className="about-text">
        <h2 className="about-heading">About Us</h2>
        <p className="about-text-content">
          We are specialized in Dialysis and customized Service to Kidney patients in a caring way.
        </p>
        <p className="about-text-content">
          We currently have 6 dialysis machines which are fully working.
        </p>
        <p className="about-text-content">
          Since we opened this Center we have had over 6000 patients treated here.
        </p>

        <ul className="about-list">
          <li>1 Doctor</li>
          <li>1 Clinical Officer</li>
          <li>4 Nurses</li>
        </ul>

        {/* Learn More Button Using Link */}
        <Link to="/about-details" className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Learn More</span>
        </Link>
      </div>

      <div className="about-image-container">
        <img
          src={images[currentImageIndex]}
          alt="About us image"
          className="about-image"
        />
      </div>
    </section>
  );
};

export default AboutUs;
