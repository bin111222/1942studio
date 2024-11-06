import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png'; // adjust path as needed

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="1942 Studio" className="logo" />
        </Link>
        
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/get-started" className="nav-button">Get Started</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 