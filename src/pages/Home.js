import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Hero from '../components/home/Hero';
import StatsSection from '../components/home/StatsSection';
import ServicesBento from '../components/home/ServicesBento';
import CaseStudies from '../components/home/CaseStudies';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(useMotionValue(0), springConfig);
  const mouseYSpring = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;
      setMousePosition({ x, y });
      mouseXSpring.set(x * 100);
      mouseYSpring.set(y * 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseXSpring, mouseYSpring]);

  return (
    <div className="relative min-h-screen bg-[#151518]">
      {/* Interactive Background Elements */}
      <div className="fixed inset-0">
        {/* Base grid */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'linear-gradient(rgba(33,34,38,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(33,34,38,0.8) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Astral Geometric Patterns */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`astral-${i}`}
            className="absolute"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
              background: `
                conic-gradient(
                  from ${mousePosition.x * 360}deg at 50% 50%,
                  rgba(45,127,250,0.15) 0deg,
                  rgba(139,92,246,0.15) 120deg,
                  rgba(236,72,153,0.15) 240deg,
                  rgba(45,127,250,0.15) 360deg
                )
              `,
              borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%',
              transform: `rotate(${mousePosition.x * 30}deg)`,
              opacity: 0.25,
              filter: 'blur(2px)',
            }}
            animate={{
              borderRadius: [
                '38% 62% 63% 37% / 41% 44% 56% 59%',
                '45% 55% 57% 43% / 45% 48% 52% 55%',
                '38% 62% 63% 37% / 41% 44% 56% 59%'
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Sacred Geometry Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`sacred-${i}`}
            className="absolute"
            style={{
              width: '100px',
              height: '100px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              border: '1px solid rgba(45,127,250,0.15)',
              transform: `rotate(${45 * i}deg)`,
            }}
            animate={{
              rotate: [45 * i, 45 * i + 360],
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Constellation Points */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-accent-blue/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              x: mouseXSpring,
              y: mouseYSpring,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <StatsSection />
        <ServicesBento />
        <CaseStudies />
      </div>
    </div>
  );
}

export default Home;