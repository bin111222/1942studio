import React from 'react';
import { motion } from 'framer-motion';

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.description}</p>
      
      <div className="space-y-2">
        {service.features.map((feature, i) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
            className="flex items-center space-x-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            <span className="text-gray-700">{feature}</span>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="neomorphic w-full mt-6 py-3 text-primary-600 font-semibold"
      >
        Learn More
      </motion.button>
    </motion.div>
  );
}

export default ServiceCard; 