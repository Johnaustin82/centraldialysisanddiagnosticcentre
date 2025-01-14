import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-white">About CentraL Dialysis</h2>
          <p className="mt-2">
            Our facility ensures comfort,reliability
            <br/>
            and a patient-centered experience .
            <br/>
            Trust us for your dialysis needs.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="/" className="text-gray-300 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="text-gray-300 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="/" className="text-gray-300 hover:text-white">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="/" className="text-gray-300 hover:text-white">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
          
          <div>
            <h3 className="text-lg font-bold text-white">Contact Us</h3>
            <address className="mt-2 not-italic">
              <p><a href="mailto:centraldialysis@gmail.com" className="hover:text-white">centraldialysis@gmail.com</a></p>
              <p>+254 722391910</p>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
        <p>Copyright © Central dialysis 2024</p>
      </div>
    </footer>
  );
};

export default Footer;