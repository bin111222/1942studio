import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';
import { useQuiz } from '../context/QuizContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { openQuiz } = useQuiz();

  // Enhanced scroll handling with debounce
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
      >
        {/* Backdrop blur and gradient overlay */}
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            isScrolled 
              ? 'backdrop-blur-xl bg-gradient-to-b from-black/80 to-black/60'
              : 'bg-transparent'
          }`}
        />

        {/* Main Navigation Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative z-10"
            >
              <Logo />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative px-4 py-2 group"
                >
                  {/* Navigation Item */}
                  <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                    location.pathname === link.path 
                      ? 'text-accent-blue' 
                      : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {link.name}
                  </span>

                  {/* Active Indicator */}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute inset-0 rounded-lg bg-accent-blue/10"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  {/* Hover Indicator */}
                  <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}

              {/* Action Buttons */}
              <div className="flex items-center space-x-4 ml-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-sm font-medium text-accent-blue hover:text-accent-purple transition-colors duration-300"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact
                </motion.button>

                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(45,108,223,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openQuiz}
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  Get Started
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-10 p-2 rounded-lg text-gray-400 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden pt-24 bg-dark-100/95 backdrop-blur-xl"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'bg-accent-blue/10 text-accent-blue'
                        : 'text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={openQuiz}
                  className="mt-4 w-full px-6 py-4 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium shadow-lg"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;