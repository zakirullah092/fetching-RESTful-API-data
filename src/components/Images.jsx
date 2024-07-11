import React, { useState, useEffect } from 'react';
import './Images.css';

function Images() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setImages(data.slice(0, 10)); // Limit to 10 images for simplicity
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error fetching images: {error.message}</p>;

  return (
    <div className="images-container">
      <h2>Images</h2>
      <ul className="images-list">
        {images.map(image => (
          <li key={image.id} className="image-item">
            <img src={image.thumbnailUrl} alt={image.title} className="image-thumbnail" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Images;
