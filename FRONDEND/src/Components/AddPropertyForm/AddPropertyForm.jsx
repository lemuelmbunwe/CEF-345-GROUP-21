import React, { useEffect, useState } from 'react';
import { addProperty, fetchProperties } from './api';
import './add.css';

const AddPropertyForm = () => {
  const [properties, setProperties] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProperty({ title, description, price, location, images });
      fetchPropertiesData();
      setTitle('');
      setDescription('');
      setPrice('');
      setLocation('');
      setImages([]);
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };

  const fetchPropertiesData = async () => {
    try {
      const data = await fetchProperties();
      setProperties(data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  useEffect(() => {
    fetchPropertiesData();
  }, []);

  return (
    <div className="container">
      <h1>Add Property</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Title" 
          required 
        />
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Description" 
          required 
        />
        <input 
          type="text" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          placeholder="Price" 
          required 
        />
        <input 
          type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          placeholder="Location" 
          required 
        />
        
        <label htmlFor="image-upload">Choose Image Import:</label>
        <input 
          id="image-upload" 
          type="file" 
          multiple 
          onChange={(e) => setImages(e.target.files)} 
        />
        
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default AddPropertyForm;