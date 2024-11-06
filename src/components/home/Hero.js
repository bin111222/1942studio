import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { useQuiz } from '../../context/QuizContext';
import { useNavigate } from 'react-router-dom';

// Define premium gradients
const gradients = [
  'radial-gradient(circle, rgba(45,108,223,0.15) 0%, transparent 70%)',  // Premium blue
  'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',  // Premium purple
  'radial-gradient(circle, rgba(220,165,70,0.12) 0%, transparent 70%)',  // Premium gold
];

// Testimonials data
const testimonials = [
  {
    quote: "Transformed our business with cutting-edge AI solutions",
    author: "Sarah Johnson",
    role: "CTO, TechCorp"
  },
  {
    quote: "Incredible results with their predictive analytics",
    author: "Michael Chen",
    role: "CEO, DataFlow"
  },
  {
    quote: "Revolutionary approach to AI implementation",
    author: "Emma Williams",
    role: "Director, AI Innovations"
  }
];

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(useMotionValue(0), springConfig);
  const mouseYSpring = useSpring(useMotionValue(0), springConfig);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const { openQuiz } = useQuiz();
  const navigate = useNavigate();

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

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section 
      className="min-h-screen relative overflow-hidden flex items-center"
      style={{ opacity }}
    >
      {/* Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              background: gradients[i],
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

        {/* Neural Network Nodes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-2 h-2 bg-accent-blue/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              x: mouseXSpring,
              y: mouseYSpring,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
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
            <motion.div 
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="px-6 py-3 rounded-full text-lg md:text-xl font-semibold bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                AI-Powered Solutions
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-accent-purple to-accent-gold leading-tight lg:leading-snug py-1"
              style={{
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Next-Gen AI Engineering
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transform your business with cutting-edge AI solutions. From intelligent chatbots to predictive analytics, we build the future of digital presence.
            </motion.p>

            {/* Testimonial Slider */}
            <motion.div 
              className="mb-12 h-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-lg text-gray-300 italic mb-2">"{testimonials[currentTestimonial].quote}"</p>
                <p className="text-sm text-accent-blue font-semibold">{testimonials[currentTestimonial].author}</p>
                <p className="text-xs text-gray-400">{testimonials[currentTestimonial].role}</p>
              </motion.div>
            </motion.div>

            <div className="flex flex-wrap gap-6 justify-center">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(45,108,223,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={openQuiz}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-medium text-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Start Your AI Journey
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(45,108,223,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/portfolio')}
                className="px-8 py-4 border border-blue-500/30 text-blue-400 font-medium text-lg rounded-xl backdrop-blur-sm hover:bg-blue-500/10 transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;