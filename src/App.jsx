import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Map from './components/Map';
import Footer from './components/footer';
import AboutUs from './components/About us/Aboutus';
import Requirements from './components/Requirements/Requirements';
import Extras from './components/Extras/Extras';

function App() {
  return (
    <>
      <section id="homepage-section">
        <Homepage />
      </section>
      <section id="aboutus-section">
        <AboutUs />
        <Requirements />
        <Extras />
      </section>
      <section id="map-section">
        <Map />
      </section>
      <section id="footer-section">
        <Footer />
      </section>
    </>
  );
}

export default App;
