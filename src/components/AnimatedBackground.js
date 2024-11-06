import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

const ParticleField = ({ mouseX, mouseY }) => {
  const particles = Array.from({ length: 50 }); // Adjust number of particles
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            x: useMotionValue(0),
            y: useMotionValue(0),
          }}
          whileHover={{
            scale: 2,
            transition: { duration: 0.3 },
          }}
        />
      ))}
    </div>
  );
};

const GradientOrbs = ({ mouseX, mouseY }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl"
        animate={{
          x: mouseX,
          y: mouseY,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 30,
          mass: 0.5,
        }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-3xl"
        animate={{
          x: mouseX,
          y: mouseY,
        }}
        transition={{
          type: "spring",
          stiffness: 30,
          damping: 20,
          mass: 0.8,
        }}
      />
    </div>
  );
};

const AnimatedBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-black/80" />
      <ParticleField mouseX={mouseX} mouseY={mouseY} />
      <GradientOrbs mouseX={mouseX} mouseY={mouseY} />
    </div>
  );
};

export default AnimatedBackground; 