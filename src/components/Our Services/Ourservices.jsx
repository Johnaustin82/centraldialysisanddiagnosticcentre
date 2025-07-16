import React from 'react';
import './ourservices.css';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Hemodialysis',
    description: 'Advanced blood filtration treatments supervised by expert nephrologists for safe and effective care.',
    link: '/services/hemodialysis'
  },
  {
    title: 'Hemodiafiltration',
    description: 'A powerful treatment combining hemodialysis and filtration for deeper toxin removal and better outcomes.',
    link: '/services/hemodiafiltration'
  },
  {
    title: 'AV Fistula Creation',
    description: 'Permanent access for dialysis using surgical techniques to join arteries and veins for reliable blood flow.',
    link: '/services/av-fistula-creation'
  },
  {
    title: 'Dialysis Catheter Insertion',
    description: 'Temporary or long-term catheter placement to allow immediate dialysis access in critical situations.',
    link: '/services/catheter-insertion'
  },
  {
    title: 'Nephrologist Consultation',
    description: 'Personalized care planning and progress reviews by certified kidney specialists to optimize treatment.',
    link: '/services/nephrologist-consultation'
  },
  {
    title: 'Renal Transplant OPD',
    description: 'Guidance and support for kidney transplant patients before and after surgery for smooth recovery.',
    link: '/services/renal-transplant-opd'
  },
  {
    title: 'Patient Education',
    description: 'Empowering patients with lifestyle, diet, and treatment knowledge to improve daily kidney care.',
    link: '/services/patient-education'
  },
  {
    title: 'Nutritional Counseling',
    description: 'Customized dietary plans and guidance by renal nutrition experts for better kidney health management.',
    link: '/services/nutritional-counseling'
  },
  {
    title: 'Emergency Dialysis Access',
    description: 'Rapid access to dialysis in urgent conditions, managed by a responsive and experienced team.',
    link: '/services/emergency-dialysis'
  },
  {
    title: 'Medical Laboratory',
    description: 'On-site lab testing for blood, urine, and diagnostics to support accurate and timely treatment decisions.',
    link: '/services/medical-laboratory'
  },
  {
    title: 'Dialysis Tourism',
    description: 'Comprehensive travel support for visiting patients requiring dialysis while exploring Kenya.',
    link: '/services/dialysis-tourism'
  },
  {
    title: 'RO Water Treatment',
    description: 'State-of-the-art reverse osmosis system to ensure pure water for all dialysis procedures.',
    link: '/services/ro-water-treatment'
  }
];

const Ourservices = () => {
  return (
    <div className="services-container">
      <div className="header">
        <h1>Our Services</h1>
        <p>Trusted Kidney & Diagnostic Care at Central Dialysis Centre</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to={service.link} className="learn-more-btn">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourservices;
