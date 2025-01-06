import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>AdzQuick</h1>
      </div>
    
      <div className="nav-right">
      <div className="nav-links">
        <Link to="/" className="li">Home</Link>
        <Link to="/Sign" className="li">Sign up</Link>
        <Link to="/AboutUs" className="li">About Us</Link>
        <Link to="/Reviews" className="li">Reviews</Link>
      </div>
      </div>
    </nav>
  );
}
