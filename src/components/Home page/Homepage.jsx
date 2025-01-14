import React from 'react';
import Navbar from '../Navbar/Navbar'

function Homepage() {
  return (
    <>
      <div className='m-0'> 
        <div
          className="relative bg-cover bg-center "
          style={{
            backgroundImage: "url('src/components/Img/home.jpg')",
            width: '100vw', 
            height: '100vh',
            
          }}
        >
          <Navbar /> 
          {/* Text container */}
          <div className="absolute inset-y-1/2 left-12 transform -translate-y-1/2">
            <h1 className="text-6xl font-bold font-montserrat text-blue-600"> {/* Changed text-4xl to text-6xl, added font-montserrat, and text-blue-700 */}
              Compassionate care for<br/>every Kidney Journey
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;