import React from 'react';

function Map() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        LOCATION
      </h1>
      <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
        <a
          href="https://www.google.com/maps/place/Central+Dialysis+Centre/@-0.4181503,36.9351399,15z/data=!4m6!3m5!1s0x18285df2a89eba23:0xef34edabdd935a31!8m2!3d-0.4178092!4d36.9323811!16s%2Fg%2F11fpkhw5xl?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src="src/components/Img/Map.png" 
            alt="Map" 
            className="w-full rounded-lg border border-gray-200"
          />
        </a>
      </div>
    </div>
  );
}

export default Map;
