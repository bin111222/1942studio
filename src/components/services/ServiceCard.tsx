'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../utils/animationConfig';

const gradientClasses = {
  "from-emerald-400 to-teal-500": "bg-gradient-to-br from-emerald-400 to-teal-500",
  "from-blue-400 to-indigo-600": "bg-gradient-to-br from-blue-400 to-indigo-600",
  "from-violet-400 to-purple-600": "bg-gradient-to-br from-violet-400 to-purple-600",
  "from-rose-400 to-orange-500": "bg-gradient-to-br from-rose-400 to-orange-500",
  "from-sky-400 to-blue-600": "bg-gradient-to-br from-sky-400 to-blue-600",
  "from-purple-400 to-violet-600": "bg-gradient-to-br from-purple-400 to-violet-600",
  "from-teal-400 to-emerald-600": "bg-gradient-to-br from-teal-400 to-emerald-600",
  "from-cyan-400 to-blue-600": "bg-gradient-to-br from-cyan-400 to-blue-600",
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: any;
  gradient: keyof typeof gradientClasses;
  delay?: number;
  isMobile?: boolean;
  onClick: () => void;
}

function ServiceCard({ title, description, icon: Icon, gradient, delay = 0, isMobile = false, onClick }: ServiceCardProps) {
  const config = useAnimationConfig(isMobile);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 5 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: config.duration, delay: isMobile ? 0 : delay }}
      className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
      onClick={onClick}
    >
      {/* Icon Container */}
      <div className="mb-6">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className={`w-14 h-14 rounded-xl ${gradientClasses[gradient]} p-3 shadow-lg`}
        >
          <Icon className="w-full h-full text-white" />
        </motion.div>
      </div>

      {/* Text Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-800">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Learn More Link */}
        <div className={`flex items-center gap-2 font-medium pt-2 ${gradientClasses[gradient]} bg-clip-text text-transparent`}>
          <span>Learn More</span>
          <svg 
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;