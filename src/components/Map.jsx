import React from 'react';

function Map() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        LOCATION
      </h1>
      <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
        <img 
          src="src/components/Img/Map.png" 
          alt="Map" 
          className="w-full rounded-lg border border-gray-200"
        />
      </div>
    </div>
  );
}

export default Map;
