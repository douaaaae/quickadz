import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbarad.css';
import logo1 from '../images/adz-w.jpg';
export default function Navbar({dark, setDark}) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="navbar">
        <img src={logo1} alt="" className="img50" />
        <div className={`navbar-toggle ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
         <span class="bar1"></span>
         <span class="bar1"></span>
         <span class="bar1"></span>
        </div>
      <div className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <Link to="/Admin" className={"li1"}>Home</Link>
        <Link to="/Manage" className="li1">Manage ads</Link>
        <Link to='/Dashboard' className="li1">Dash Board</Link>
        <Link to="/" className="li1">Logout</Link>
      </div>
      
    </nav>
  );
}
