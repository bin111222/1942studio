import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CpuChipIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  CloudArrowUpIcon,
  CogIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    title: "AI Development",
    description: "Custom AI solutions tailored to your business needs, from chatbots to predictive analytics.",
    icon: CpuChipIcon,
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and visualization.",
    icon: ChartBarIcon,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Chatbot Solutions",
    description: "Intelligent conversational AI that enhances customer engagement and support.",
    icon: ChatBubbleBottomCenterTextIcon,
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Cloud AI Integration",
    description: "Seamless integration of AI services with cloud infrastructure for scalable solutions.",
    icon: CloudArrowUpIcon,
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Machine Learning Ops",
    description: "End-to-end MLOps implementation for efficient model deployment and monitoring.",
    icon: CogIcon,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Natural Language Processing",
    description: "Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.",
    icon: CommandLineIcon,
    gradient: "from-amber-500 to-orange-500"
  }
];

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

function ServicesBento() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-6 py-3 rounded-full text-lg font-semibold bg-accent-blue/10 text-accent-blue border border-accent-blue/20 mb-8"
          >
            Featured Services
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-accent-purple to-accent-gold">
            AI Solutions for Every Need
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Discover how our AI services can transform your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(45,108,223,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium text-lg shadow-lg"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesBento; 