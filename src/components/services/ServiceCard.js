import React from 'react';
import { motion } from 'framer-motion';

function ServiceCard({ title, description, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-dark-200/50 to-dark-300/30 backdrop-blur-sm border border-white/5"
    >
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content Container */}
      <div className="relative p-8">
        {/* Icon Container */}
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 blur-xl" />
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple p-2.5 shadow-lg"
          >
            <Icon className="w-full h-full text-white" />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple transition-all duration-300">
            {title}
          </h3>
          
          <p className="text-gray-400 leading-relaxed">
            {description}
          </p>

          {/* Learn More Link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-accent-blue font-medium pt-2 group-hover:text-accent-purple transition-colors duration-300"
          >
            <span>Learn More</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 blur-2xl group-hover:opacity-75 transition-opacity duration-500" />
    </motion.div>
  );
}

export default ServiceCard;