import React from 'react';

function Map() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="container mx-auto p-4 rounded-lg">
        <h2
          className="text-center text-4xl font-bold text-gray-800 mb-8 underline decoration-solid decoration-gray-800"
          style={{ fontFamily: "'Times New Roman', Times, serif" ,
            fontStyle: 'italic', fontsize: '2.7rem',
            fontweight: 'bold',
            texttransform: 'uppercase',
            
          }}
        >
          LOCATION
        </h2>
        <div className="text-center mb-4">
          <p className="text-2xl mb-5">We are conveniently located along the Nyeri-Mathari Road.</p>
          <p className="text-2xl leading-loose">
            This makes us easily accessible for patients traveling from both Nyeri and Mathari, ensuring you get the dialysis care you need without unnecessary detours.
          </p>
        </div>
        <a
          href="https://www.google.com/maps/place/Central+Dialysis+Centre/@-0.4181503,36.9351399,15z/data=!4m6!3m5!1s0x18285df2a89eba23:0xef34edabdd935a31!8m2!3d-0.4178092!4d36.9323811!16s%2Fg%2F11fpkhw5xl?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Full-width map image, responsive height */}
          <img
  src="/Img/map.png"
  alt="Map showing location along Nyeri-Mathari Road"
  className="w-100vw h-auto rounded-lg border border-gray-200 max-width: [desired_max_width]"
/>
        </a>
      </div>
    </div>
  );
}

export default Map;