import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function Hero() {
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
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              background: i === 0 ? 'radial-gradient(circle, rgba(45,127,250,0.3) 0%, transparent 70%)' :
                       i === 1 ? 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)' :
                                'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)',
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              x: mouseXSpring,
              y: mouseYSpring,
              scale: 1 + (mousePosition.x + mousePosition.y) * 0.1,
              rotate: (mousePosition.x - mousePosition.y) * 10,
              transformOrigin: 'center',
            }}
            transition={{ type: "spring", damping: 15, stiffness: 150 }}
          />
        ))}

        {/* Geometric Shapes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute w-4 h-4 border border-accent-blue/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              x: mouseXSpring,
              y: mouseYSpring,
              scale: 1 + (Math.sin(mousePosition.x * Math.PI) * 0.2),
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                AI-Powered Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-accent-purple to-neon-pink"
                style={{
                  textShadow: '0 0 3px rgba(0, 240, 255, 0.3), 0 0 6px rgba(0, 240, 255, 0.2)'
                }}>
              Next-Gen AI Engineering
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              Transform your business with cutting-edge AI solutions. From intelligent chatbots to predictive analytics, we build the future of digital presence.
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl flex items-center gap-2 hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300"
              >
                <span>Start Your AI Journey</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-glass-light backdrop-blur-sm text-gray-300 font-semibold rounded-xl hover:bg-glass-light transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;