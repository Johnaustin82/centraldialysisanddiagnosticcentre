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
      <section><Homepage/></section>
      <section><AboutUs/></section>
      <section><Requirements/></section>
      <section><Extras/></section>
      <section><Map/></section>
      <section><Footer/></section>
    </>
  );
}

export default App;