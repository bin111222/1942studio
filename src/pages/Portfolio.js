import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const featuredWork = [
  {
    id: 'sculptique',
    title: 'The Sculptique Website',
    slug: 'sculptique',
    description: 'AI-driven website with custom chatbot integration',
    image: '/case-studies/sculptique/hero.svg',
    tags: ['Web Design', 'AI Integration']
  },
  {
    id: 'hks-clinic',
    title: 'HKS Clinic Digital Presence',
    slug: 'hks-clinic',
    description: 'Full-stack development with AI-powered analytics',
    image: '/case-studies/hks/hero.svg',
    tags: ['Platform', 'Analytics']
  }
];

function PortfolioCard({ project, index }) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="glass-card overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-transparent z-10" />
          
          {/* Project Image */}
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/600x400?text=Project+Image';
            }}
          />
          
          {/* Floating Tags */}
          <div className="absolute top-4 right-4 z-20 flex gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-dark-300/80 backdrop-blur-sm text-white rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 relative">
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium rounded-xl shadow-lg shadow-accent-blue/20 hover:shadow-xl transition-all duration-300"
          >
            View Case Study
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-dark-100">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent-blue/5 via-dark-100 to-dark-100" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent">
            Our Work
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of innovative digital solutions powered by AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredWork.map((project, index) => (
            <PortfolioCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio; 