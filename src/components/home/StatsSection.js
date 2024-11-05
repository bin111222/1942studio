import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: '35%', label: 'increase in leads' },
  { number: '40%', label: 'increase in online presence' },
  { number: '7+', label: 'years in the business' },
  { number: '200+', label: 'artists collaborated with' },
  { number: '1000+', label: 'marketing materials created' },
  { number: '100s', label: 'of hours of content shot' },
  { number: '1000+', label: 'images delivered' },
  { number: '500+', label: 'blogs written' }
];

function StatsSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-16 relative text-center"
          >
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-sm font-normal text-accent-blue">
              Our Impact
            </span>
            <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent">
              Tomorrow's Growth Started Yesterday
            </span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-4 md:p-6 text-center group hover:shadow-lg transition-all duration-300"
              >
                <motion.span
                  className="block text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.number}
                </motion.span>
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default StatsSection; 