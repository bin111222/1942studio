'use client';
import { useEffect } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useSmoothScroll();

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/serviceWorker.js')
          .then(registration => {
            console.log('SW registered:', registration);
          })
          .catch(error => {
            console.log('SW registration failed:', error);
          });
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
} 