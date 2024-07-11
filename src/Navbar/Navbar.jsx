import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <h3>Zakir</h3>
      <ul>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/images">Images</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
