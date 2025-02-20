import React from 'react';
import './ImageComponent.css'; // Import the CSS file
import pic from './pic.jpg';// Import the image file

function HomeImage() {
  return (
    <>
      
      <div className="image-container">
        <img src={pic} alt="Home Image" />
        <h1 className="h11">Welcome to Damar</h1>

      </div>
    </>

  );
}

export default HImage