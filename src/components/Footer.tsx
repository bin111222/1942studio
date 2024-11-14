// src/components/Footer.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export const Footer = () => {
  return (
    <footer className="relative z-10">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="1942 Studio Logo"
                width={120}
                height={40}
                className="mb-2"
                priority
              />
            </Link>
            <p className="text-gray-500/80 leading-relaxed">
              Building the future of digital innovation through advanced artificial intelligence
              and creative excellence.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com/1942studio"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-blue-500/5 flex items-center justify-center group transition-colors duration-300 hover:bg-blue-500/10"
              >
                <Image
                  src="/images/social/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path}
                    className="text-gray-500 hover:text-blue-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li>
                <motion.a
                  href="mailto:info@1942studio.com"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                    <EnvelopeIcon className="w-5 h-5 text-blue-500" />
                  </div>
                  <span>info@1942studio.com</span>
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="tel:+919833812505"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                    <PhoneIcon className="w-5 h-5 text-blue-500" />
                  </div>
                  <span>+91 98338 12505</span>
                </motion.a>
              </li>
              <li>
                <div className="flex items-center space-x-3 text-gray-500">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <MapPinIcon className="w-5 h-5 text-blue-500" />
                  </div>
                  <span>Remotely Working from Asia</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 text-center border-t border-white/5">
          <p className="text-gray-500/80 text-sm">
            © 1942 Studio.
          </p>
        </div>
      </div>
    </footer>
  );
};