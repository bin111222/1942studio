'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function Background({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mouseSpeedRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize points
    const initPoints = () => {
      const points: Point[] = [];
      const numPoints = 100;
      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2
        });
      }
      pointsRef.current = points;
    };

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints();
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Calculate mouse speed
      mouseSpeedRef.current = {
        x: mouseX - lastMousePosRef.current.x,
        y: mouseY - lastMousePosRef.current.y
      };
      
      lastMousePosRef.current = { x: mouseX, y: mouseY };
      mouseRef.current = { x: mouseX, y: mouseY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation function
    const animate = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw points
      pointsRef.current.forEach((point, i) => {
        // Calculate distance to mouse
        const dx = mouseRef.current.x - point.x;
        const dy = mouseRef.current.y - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Apply mouse influence
        if (dist < 200) {
          const force = (1 - dist / 200) * 0.02;
          point.vx += dx * force + mouseSpeedRef.current.x * 0.1;
          point.vy += dy * force + mouseSpeedRef.current.y * 0.1;
        }

        // Update position
        point.x += point.vx;
        point.y += point.vy;

        // Apply friction
        point.vx *= 0.95;
        point.vy *= 0.95;

        // Bounce off walls
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        // Draw connections
        pointsRef.current.forEach((otherPoint, j) => {
          if (i === j) return;
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${1 - dist / 100})`;
            ctx.lineWidth = 2 * (1 - dist / 100);
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.stroke();
          }
        });

        // Draw point
        ctx.beginPath();
        ctx.fillStyle = 'rgba(99, 102, 241, 0.8)';
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0"
        style={{ opacity: 0.8 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 