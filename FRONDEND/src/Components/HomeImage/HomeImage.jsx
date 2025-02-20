import React from 'react';
import './HomeImage.css'; // Import the CSS file
import pic from './pic.jpg';// Import the image file

function HomeImage() {
  return (
    <>
      
      <div className="image-container">
        <img src={pic} alt="Home Image" />
        <div class = "text">
        Welcome to Damar
        </div>

      </div>
    </>

  );
}

export default HomeImage