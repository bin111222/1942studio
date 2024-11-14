'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const GRID_SIZE = 20;
const PARTICLE_COUNT = 50;

interface Particle {
  x: number;
  y: number;
  angle: number;
  speed: number;
  size: number;
}

export const Background = ({ children }: { children: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Initialize particles
  useEffect(() => {
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      angle: Math.random() * Math.PI * 2,
      speed: 0.5 + Math.random() * 0.5,
      size: 1 + Math.random() * 2,
    }));
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Draw mathematical grid
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)';
      ctx.lineWidth = 1;

      // Draw Cartesian grid
      for (let i = 0; i < canvas.width; i += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }
    };

    // Draw mathematical curves
    const drawCurves = (time: number) => {
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.2)';
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 5) {
        // Parametric equations for animated curves
        const y = Math.sin(x / 50 + time / 1000) * 50 + canvas.height / 2;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    };

    // Update and draw particles
    const updateParticles = () => {
      particles.current.forEach(particle => {
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.fillStyle = 'rgba(99, 102, 241, 0.5)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Animation loop
    let animationFrame: number;
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(239, 246, 255, 0.8)'); // blue-50
      gradient.addColorStop(1, 'rgba(243, 232, 255, 0.8)'); // purple-50
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGrid();
      drawCurves(time);
      updateParticles();

      // Draw mathematical symbols at random positions
      const symbols = ['∑', '∫', '∞', 'π', '√', 'Δ', '∇'];
      ctx.font = '20px serif';
      ctx.fillStyle = 'rgba(99, 102, 241, 0.1)';
      symbols.forEach((symbol, i) => {
        const x = (Math.sin(time / 2000 + i) + 1) * canvas.width / 2;
        const y = (Math.cos(time / 2000 + i) + 1) * canvas.height / 2;
        ctx.fillText(symbol, x, y);
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0"
        style={{ opacity: 0.8 }}
      />
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
          '--mouse-x': mouseXSpring,
          '--mouse-y': mouseYSpring,
        } as any}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}; 