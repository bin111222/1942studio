import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  ClockIcon, 
  SparklesIcon,
  PhotoIcon,
  FilmIcon,
  DocumentTextIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const stats = [
  {
    number: "35%",
    label: "Increase in Leads",
    description: "Year-over-year growth in qualified leads",
    icon: ChartBarIcon,
  },
  {
    number: "40%",
    label: "Increase in Online Presence",
    description: "Enhanced digital visibility and engagement",
    icon: GlobeAltIcon,
  },
  {
    number: "7+",
    label: "Years in the Business",
    description: "Delivering excellence since 2017",
    icon: ClockIcon,
  },
  {
    number: "200+",
    label: "Artists Collaborated With",
    description: "Creative partnerships worldwide",
    icon: UserGroupIcon,
  },
  {
    number: "1000+",
    label: "Marketing Materials Created",
    description: "Comprehensive marketing solutions",
    icon: SparklesIcon,
  },
  {
    number: "100s",
    label: "Hours of Content Shot",
    description: "Professional video production",
    icon: FilmIcon,
  },
  {
    number: "1000+",
    label: "Images Delivered",
    description: "High-quality visual content",
    icon: PhotoIcon,
  },
  {
    number: "500+",
    label: "Blogs Written",
    description: "Engaging content creation",
    icon: DocumentTextIcon,
  }
];

function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-purple">
            The Impact We Create
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transforming businesses through innovative AI solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(45, 108, 223, 0.1)"
              }}
              className="relative group bg-dark-200/50 backdrop-blur-sm rounded-2xl p-8 border border-accent-blue/10"
            >
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-accent-blue" />
                </div>
                
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-purple"
                >
                  {stat.number}
                </motion.h3>
                
                <h4 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h4>
                
                <p className="text-gray-400">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Stats; 