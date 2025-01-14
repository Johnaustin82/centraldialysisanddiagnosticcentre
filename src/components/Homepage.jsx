// import React from 'react';
// import Navbar from './Navbar/Navbar';

// function Homepage() {
//   return (
//     <>
//     <Navbar/>
//     <div
//       className="relative w-full h-screen overflow-hidden"
//       style={{
//         backgroundImage: "url('src/components/Img/home.jpg')",
//       }}
//     >
//       <div className="absolute inset-0 "></div>
//       <div>
//         <div className=" text-black">
//           <h1 className="text-4xl font-bold mb-4">Compassianate care for every Kidney Journey</h1>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Homepage;

import React from 'react';
import Navbar from './Navbar/Navbar';


function Homepage() {
  return (
    <>
      <Navbar/>
      <div className='m-0'>
      <div
        className="relative bg-cover bg-center "
        style={{
          backgroundImage: "url('src/components/Img/home.jpg')",
          width: '100vw', 
          height: '100vh'
        }}
      >
      
        
        {/* Text container */}
        <div className="absolute inset-y-1/2 left-8 transform -translate-y-1/2 text-black">
          <h1 className="text-4xl font-bold font-mono">
            Compassionate care for<br/>every Kidney Journey
          </h1>
        </div>
      </div>
      </div>
    </>
  );
}

export default Homepage;
