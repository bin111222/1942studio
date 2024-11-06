import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/" className="flex-shrink-0">
      <motion.img
        src="/images/logo.png"
        alt="1942 Studio"
        className="h-12 md:h-16 w-auto"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          filter: 'brightness(1.1)',
          willChange: 'transform'
        }}
      />
    </Link>
  );
}

export default Logo; 