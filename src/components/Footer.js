import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="relative z-20 bg-gradient-to-b from-dark-200 to-dark-300 mt-auto">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-radial from-accent-blue/5 via-transparent to-transparent opacity-30 blur-2xl"
             style={{ transform: 'translate(-30%, -30%)' }} />
        <div className="absolute inset-0 bg-gradient-radial from-accent-purple/5 via-transparent to-transparent opacity-30 blur-2xl"
             style={{ transform: 'translate(50%, -20%)' }} />
      </div>

      <div className="relative border-t border-dark-300/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">1942 Studio</h3>
              <p className="text-gray-400">
                Building the future of digital presence with AI-driven solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                {['Services', 'Portfolio', 'About Us', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`/${link.toLowerCase().replace(' ', '-')}`} 
                      className="text-gray-400 hover:text-accent-blue transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
              <div className="flex space-x-4">
                {[
                  { icon: 'twitter', url: '#' },
                  { icon: 'linkedin', url: '#' },
                  { icon: 'github', url: '#' }
                ].map(({ icon, url }) => (
                  <a
                    key={icon}
                    href={url}
                    className="text-gray-400 hover:text-accent-blue transition-colors text-xl"
                  >
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-dark-300 border border-dark-400 rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-lg"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-dark-300 text-center text-gray-400">
            <p>&copy; 2024 1942 Studio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 