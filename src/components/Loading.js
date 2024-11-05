import React from 'react';
import { motion } from 'framer-motion';

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        className="w-16 h-16 border-4 border-primary-500 rounded-full border-t-transparent"
      />
    </div>
  );
}

export default Loading; 