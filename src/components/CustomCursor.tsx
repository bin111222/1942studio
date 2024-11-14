'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // More responsive spring config
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Trail elements
  const trails = Array.from({ length: 5 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);

      // Magnetic effect on hover
      if (isHovering) {
        const hoveredElement = document.querySelector(':hover') as HTMLElement;
        if (hoveredElement) {
          const rect = hoveredElement.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const strength = 0.3; // Magnetic pull strength

          cursorX.set(centerX + (e.clientX - centerX) * strength - 16);
          cursorY.set(centerY + (e.clientY - centerY) * strength - 16);
        }
      }
    };

    const updateCursorType = () => {
      const hoveredElement = document.querySelector(':hover');
      if (hoveredElement) {
        const cursor = window.getComputedStyle(hoveredElement).cursor;
        setIsPointer(cursor === 'pointer');
        setIsHovering(cursor === 'pointer');
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', updateCursorType);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', updateCursorType);
    };
  }, [cursorX, cursorY, isHovering]);

  return (
    <>
      {/* Cursor trails */}
      <AnimatePresence>
        {trails.map((_, index) => (
          <motion.div
            key={index}
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-40 mix-blend-difference opacity-20"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              scale: 1 - index * 0.1,
              transition: `all ${index * 50}ms linear`,
            }}
          >
            <div className="absolute inset-0 rounded-full border border-white" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{
            scale: isPointer ? 1.5 : 1,
            rotate: isPointer ? 45 : 0,
          }}
          transition={{ duration: 0.15 }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-white" />
          <motion.div
            className="absolute inset-0 rounded-full bg-white"
            initial={{ scale: 0.5 }}
            animate={{ 
              scale: isPointer ? 0.5 : 0,
              rotate: isPointer ? -45 : 0,
            }}
            transition={{ duration: 0.15 }}
          />
        </motion.div>
      </motion.div>
    </>
  );
} 