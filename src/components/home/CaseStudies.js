import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const caseStudies = [
  {
    id: 'sculptique',
    title: 'The Sculptique Website',
    description: 'AI-driven website with custom chatbot integration',
    image: '/case-studies/sculptique/hero.svg',
    tags: ['Web Design', 'AI Integration'],
    gradient: "from-accent-blue to-accent-purple"
  },
  {
    id: 'hks-clinic',
    title: 'HKS Clinic Digital Presence',
    description: 'Full-stack development with AI-powered analytics',
    image: '/case-studies/hks/hero.svg',
    tags: ['Platform', 'Analytics'],
    gradient: "from-accent-purple to-accent-pink"
  }
];

function CaseStudies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent">
            Featured Case Studies
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore how we've helped businesses transform their digital presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card overflow-hidden">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-transparent z-10" />
                  <motion.img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/600x400?text=Case+Study';
                    }}
                  />
                  
                  {/* Tags */}
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-dark-300/80 backdrop-blur-sm text-white rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {study.description}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`bg-gradient-to-r ${study.gradient} px-6 py-3 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
                  >
                    <span>View Case Study</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies; 