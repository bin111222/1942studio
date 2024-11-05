import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

function AnimatedBackground() {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage
      const moveX = (clientX - innerWidth / 2) / innerWidth;
      const moveY = (clientY - innerHeight / 2) / innerHeight;

      // Animate the gradients based on mouse position
      controls.start({
        background: `radial-gradient(circle at ${50 + moveX * 10}% ${50 + moveY * 10}%, 
          rgba(45,127,250,0.15) 0%, 
          rgba(139,92,246,0.1) 25%, 
          rgba(0,0,0,0) 50%),
          radial-gradient(circle at ${45 - moveX * 10}% ${45 - moveY * 10}%, 
          rgba(236,72,153,0.15) 0%, 
          rgba(6,182,212,0.1) 25%, 
          rgba(0,0,0,0) 50%)`,
        transition: { duration: 0.5, ease: "easeOut" }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [controls]);

  return (
    <>
      {/* Fixed background with cyber grid */}
      <div className="fixed inset-0 bg-dark-100">
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'linear-gradient(rgba(33,34,38,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(33,34,38,0.8) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Animated gradient background */}
      <motion.div
        ref={containerRef}
        animate={controls}
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            rgba(45,127,250,0.15) 0%, 
            rgba(139,92,246,0.1) 25%, 
            rgba(0,0,0,0) 50%),
            radial-gradient(circle at 45% 45%, 
            rgba(236,72,153,0.15) 0%, 
            rgba(6,182,212,0.1) 25%, 
            rgba(0,0,0,0) 50%)`
        }}
      />

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-blue/30 rounded-full"
            animate={{
              y: [-20, 20],
              x: [-20, 20],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </>
  );
}

export default AnimatedBackground; 