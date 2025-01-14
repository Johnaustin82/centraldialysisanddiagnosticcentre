import React, { useEffect } from 'react';
import './location.css'

const Location = () => { // Renamed component to Location
  useEffect(() => {
    // Function to initialize the Google Map
    function initialize() {
      const myCenter = new google.maps.LatLng(51.308742, -0.320850);
      const mapProp = {
        center: myCenter,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };
      const map = new google.maps.Map(document.getElementById("location"), mapProp); // Replaced 'map' with 'location'

      const marker = new google.maps.Marker({
        position: myCenter,
      });
      marker.setMap(map);
    }

    // Load the map script only once after the component mounts
    if (typeof window !== 'undefined' && !window.googleLoaded) {
      const script = document.createElement('script');
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initialize";
      script.async = true;
      window.googleLoaded = true; // Flag to prevent loading script again
      document.body.appendChild(script);
    } else if (typeof window !== 'undefined' && window.googleLoaded) {
      initialize(); // Call initialize if script is already loaded
    }
  }, []);

  return (
    <div className="location"> // Renamed class to 'location'
      <div id="location"></div>  // Replaced 'map' with 'location'
      <div className="map-c">  // Maintained 'map-c' class for content
        <h1>ABC Stores</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          id cumque est dolores voluptatibus.
        </p>
        <div className="det">
          <i className="fa fa-map-marker"></i> 102 New Road, New City
        </div>
        <div className="det">
          <i className="fa fa-phone"></i> 001 2045 509
        </div>
        <div className="det">
          <i className="fa fa-globe"></i> www.abcstores.com
        </div>
        <center>
          <button className="fa fa-car"></button>
          <button className="fa fa-envelope"></button>
        </center>
      </div>
    </div>
  );
};

export default Location;