import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Store from './components/Store';
import Blog from './components/Blog';
import Images from './components/Images';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/store" element={<Store />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/images" element={<Images />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
