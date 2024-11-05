import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-100/80 backdrop-blur-xl border-b border-accent-blue/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/">
            <motion.img 
              src={logo} 
              alt="1942 Studio" 
              className="h-12 w-auto hover:opacity-80 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="relative px-4 py-2 group"
              >
                <span className={`
                  relative z-10 text-sm font-medium
                  ${location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                    ? 'text-white'
                    : 'text-gray-400 group-hover:text-white'}
                  transition-colors duration-300
                `}>
                  {item}
                </span>
                
                {/* Animated background for active/hover state */}
                {location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-lg"
                    style={{ borderRadius: 8 }}
                  />
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/0 to-accent-purple/0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </Link>
            ))}
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-accent-blue to-accent-purple text-white text-sm font-medium rounded-lg shadow-lg shadow-accent-blue/20 hover:shadow-accent-blue/40 transition-shadow duration-300"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-lg bg-dark-300/50 hover:bg-dark-300 transition-colors duration-300"
          >
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;