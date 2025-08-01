import React, { useState, useEffect } from 'react';
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
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="dialysis-page">

      {/* ── Breadcrumb Path ───────────────────────────── */}
      <div className="breadcrumb">
        <a href="/">Home</a> <span>»</span> <span>About Us</span>
      </div>

      {/* ── Header with Background ────────────────────── */}
      <header className="header">
        <div className="header-overlay">
          <h1>About Us</h1>
          <p>Quality Care with Compassion</p>
        </div>
      </header>

      {/* ── About Section with Image on Right ─────────── */}
      <section className="about-main">
        <div className="about-content">
          <div className="highlight-box">
            <h2>Our Mission</h2>
            <p>
              At Central Dialysis Centre, our mission is to inspire hope for every patient living with
              chronic and acute renal conditions and deliver greater care, every day.
            </p>
            <p>
              We are committed to offering the finest patient care and treatment through a team of
              skilled experts and advanced equipment in a serene and comfortable environment so our
              patients feel at home, always.
            </p>
          </div>

          <div className="highlight-box">
            <h2>Our Vision</h2>
            <p>
              Our vision is to become the leading dialysis facility for people living with chronic
              and acute renal conditions and empower each patient to live a fulfilling life.
            </p>
          </div>

          <div className="highlight-box">
            <h2>Our Reach</h2>
            <p>
              We are proud to be the fastest-growing chain of SHA-accredited dialysis centers in
              Kenya. With eight cutting-edge facilities located in Nairobi, Mombasa, Busia, Kisii,
              Kisumu, Kitale and Kakamega, we are dedicated to delivering exceptional renal care.
            </p>
            <p>
              Our mission is to provide high-quality, affordable dialysis services while maintaining
              a supportive and compassionate environment for our patients and their families. Our
              rapid expansion and SHA accreditation reflect our commitment to accessibility and
              excellence in renal health care.
            </p>
          </div>

          <div className="highlight-box">
            <h2>Why Choose Central Dialysis?</h2>
            <div className="benefits">
              <div className="benefit-card">
                <h4>💡 Expert Renal Team</h4>
                <p>Our medical team combines experience and empathy to provide top-notch dialysis care.</p>
              </div>
              <div className="benefit-card">
                <h4>🏥 Modern Equipment</h4>
                <p>Equipped with 6 advanced dialysis machines for reliable and comfortable treatment.</p>
              </div>
              <div className="benefit-card">
                <h4>❤️ Patient-Centered Service</h4>
                <p>Our services are customized to the unique needs of every kidney patient.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Image (Slideshow) on Right ───────────────── */}
        <div className="about-image-wrapper">
          <img
            src={images[currentImageIndex]}
            alt="About Central Dialysis"
            className="about-image"
          />
        </div>
      </section>

      {/* ── Call to Action ───────────────────────────── */}
      <section className="cta">
        <p>Over 6000 lives changed. Your journey to better kidney health begins here.</p>
        <a href="/contact">Book Your Dialysis Appointment</a>
      </section>
    </div>
  );
};

export default AboutUs;
