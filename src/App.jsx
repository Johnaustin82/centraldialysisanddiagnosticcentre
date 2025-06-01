import React from 'react';
import './App.css';
import Homepage from './components/Home page/Homepage';
import Map from './components/Location/Map';
import Footer from './components/Footer/footer';
import AboutUs from './components/About us/Aboutus';
import Requirements from './components/Requirements/Requirements';
import Extras from './components/Extras/Extras';
import DialysisClinicSchedule from './components/Calender';



function App() {
  return (
    <>
      <section id="homepage-section">
        <Homepage />
      </section>
      <section id="aboutus-section">
        <AboutUs />
        <Requirements />
        <DialysisClinicSchedule/>
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