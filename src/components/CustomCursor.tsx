'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const updateCursorType = () => {
      const hoveredElement = document.querySelector(':hover');
      if (hoveredElement) {
        const cursor = window.getComputedStyle(hoveredElement).cursor;
        setIsPointer(cursor === 'pointer');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', updateCursorType);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', updateCursorType);
    };
  }, [cursorX, cursorY]);

  return (
    <>
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
          }}
          transition={{ duration: 0.15 }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-white" />
          <motion.div
            className="absolute inset-0 rounded-full bg-white"
            initial={{ scale: 0.5 }}
            animate={{ scale: isPointer ? 0.5 : 0 }}
            transition={{ duration: 0.15 }}
          />
        </motion.div>
      </motion.div>
    </>
  );
} 