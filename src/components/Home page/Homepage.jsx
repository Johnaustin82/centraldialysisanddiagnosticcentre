import React from 'react';
import Navbar from '../Navbar/Navbar'

function Homepage() {
  return (
    <div className='min-h-screen'> 
      <div 
        className="relative bg-cover bg-center h-screen" 
        style={{ 
          backgroundImage: "url('public/Img/home.jpg')" 
        }}
      >
        <Navbar /> 
        <div className="absolute inset-y-1/2 left-10 transform -translate-y-1/2"> 
          <h1 className="text-5xl font-bold text-blue-800 font-montserrat">Compassionate care for<br/>every Kidney Journey</h1> 
        </div>
      </div>
    </div>
  );
}

export default Homepage;