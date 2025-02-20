import React, { useEffect, useState } from 'react';
import './PropertyList.css';

const API_BASE_URL = 'http://localhost:3000/uploads/';
const API_PROPERTIES_URL = 'http://localhost:3000/api/properties';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch property details from the backend API
    fetch(API_PROPERTIES_URL)
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  if (!properties || properties.length === 0) {
    return <p>No properties available</p>;
  }

  function processString(input) {
    // Remove square brackets and replace \\ with //
    return input
      .replace(/[\[\]"]/g, '') // Remove [ ] and "
      .replace(/\\/g, '//');    // Replace \ with //
  }


  return (
    <div className="property-list">
      {properties.map((property) => (
        <div className="property-card" key={property.PropertyID}>
          <img className='property-image'
          src={`${API_BASE_URL}${property.Images}`}
            // src={`${API_BASE_URL}${processString(property.Images)}`}
            alt={`${property.Title} image`}
          />
          <h2>{property.Title}</h2>
          <p> {property.Description}</p>
          <p><strong>Price:</strong> CFA{property.Price}</p>
          <p><strong>Location:</strong> {property.Location}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
