import React, { useState } from 'react';
import { FaStar, FaUpload, FaTrash } from 'react-icons/fa';
import './MetShines.css';

const MetShines = () => {
  const [images, setImages] = useState([
    // Sample initial images
    { id: 1, url: '/path/to/sample1.jpg' }
  ]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    
    files.forEach(file => {
      if (file.type.includes('image')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImages(prev => [...prev, {
            id: Date.now(),
            url: reader.result
          }]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleDelete = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  return (
    <div className="met-shines-admin">
      <div className="page-header">
        <h2><FaStar /> MET Shines - Success Stories</h2>
      </div>

      <div className="upload-section">
        <div className="upload-box">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            id="image-upload"
            className="file-input"
          />
          <label htmlFor="image-upload" className="upload-label">
            <FaUpload />
            <span>Upload Success Story Banners</span>
            <small>Upload JPG images only</small>
          </label>
        </div>
      </div>

      <div className="images-grid">
        {images.map(image => (
          <div key={image.id} className="image-card">
            <img src={image.url} alt="Success Story" />
            <button 
              className="delete-btn" 
              onClick={() => handleDelete(image.id)}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetShines;