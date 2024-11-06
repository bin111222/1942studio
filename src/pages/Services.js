import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from '../components/services/ServiceCard';
import {
  CpuChipIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  CloudArrowUpIcon,
  CogIcon,
  CommandLineIcon,
  CubeTransparentIcon,
  DocumentMagnifyingGlassIcon,
  LightBulbIcon
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
  },
  {
    title: "Computer Vision",
    description: "Image and video analysis solutions powered by state-of-the-art deep learning models.",
    icon: CubeTransparentIcon,
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with predictive modeling.",
    icon: DocumentMagnifyingGlassIcon,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "AI Consulting",
    description: "Strategic guidance on AI implementation and digital transformation initiatives.",
    icon: LightBulbIcon,
    gradient: "from-violet-500 to-purple-500"
  }
];

function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dark-100" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-200/50 via-transparent to-transparent" />
      
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
            Our Services
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-accent-purple to-accent-gold">
            Transformative AI Solutions
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Unleashing the Power of AI in Your Digital Journey
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

        {/* Bottom CTA */}
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
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;