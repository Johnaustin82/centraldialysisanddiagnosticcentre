import React from 'react';

function Map() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4"> {/* Reduced margin-bottom to mb-4 */}
        LOCATION 
        <span className="text-sm text-gray-500 block mt-2"> 
          Located your appointment. Feel free to give us feedback and help us improve our digital med care.
        </span> 
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