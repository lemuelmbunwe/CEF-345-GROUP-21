import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Damar</h1>
      <p className="about-paragraph">
        Damar is a project designed to facilitate the search for desired real estate or properties.
      </p>
      <p className="about-paragraph">
        This project idea was developed by a group of four students (the collaborators) to gain knowledge of the various technologies used in software development. This course employs a project-based learning approach, allowing us to develop this platform together as we learn.
      </p>
      <p className="about-paragraph">
        Damar is a user-friendly platform that helps users find properties for sale or rent. Whether you are looking for a home, office space, or a guest house, Damar simplifies the search process and connects you with the right listings.
      </p>
      <h2 className="about-subtitle">Features</h2>
      <ul className="about-list">
        <li className="about-list-item">
          <strong>Property Listings:</strong> Browse a wide range of properties available for sale or rent.
        </li>
        <li className="about-list-item">
          <strong>Advanced Search Filters:</strong> Use filters to narrow down your search based on location, price, and type of property.
        </li>
        <li className="about-list-item">
          <strong>User Profiles:</strong> Create and manage your profile to save favorite listings.
        </li>
        <li className="about-list-item">
          <strong>Responsive Design:</strong> Access the platform on any device, whether it’s a desktop, tablet, or smartphone.
        </li>
      </ul>
    </div>
  );
}

export default About;