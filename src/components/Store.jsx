import React, { useState, useEffect } from 'react';
import './Store.css';
function Store() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(' https://api.escuelajs.co/api/v1/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;


  return (
    <div className="store-container">
    {products.map(item => (
      <div key={item.id} className="product-card">
        <img src={item.images[0]} alt={item.title} />
        <div className="product-details">
          <h2 className="product-title">{item.title}</h2>
          <p className="product-description">{item.description}</p>
          <p className="product-price">${item.price}</p>
          <span className="product-category">{item.category.name}</span>
        </div>
      </div>
    ))}
  </div>
  
  );
}

export default Store;
