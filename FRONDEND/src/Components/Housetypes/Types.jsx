import React from 'react';
import Singleroom from './Singleroom.jpg';
import Apartment from './Apartment.jpg';
import Studio from './Studio.jpg';
import './Type.css'; // Import the CSS file

function Type() {
  return (
    <>
     <h1 className= "h11"><strong>Lets get Started</strong></h1>
    <div className="content">
      <div className="main-content">
        <div className="property-container">
          <div className="property" data-title="Single Rooms">
            <img src={Singleroom} alt="Single Rooms" />
            <h2>Single Rooms</h2>
            <p>Spacious single rooms in the city center with modern amenities.</p>
          </div>

          <div className="property" data-title="Apartment">
            <img src={Apartment} alt="Apartment" />
            <h2>Apartment</h2>
            <p>Charming cottage surrounded by nature, perfect for a weekend getaway.</p>
          </div>

          <div className="property" data-title="Studio">
            <img src={Studio} alt="Studio" />
            <h2>Studio</h2>
            <p>Cozy studio apartments with all utilities included.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
  
}

export default Type