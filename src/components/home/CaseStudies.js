import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const caseStudies = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Revolutionizing data visualization with real-time AI insights",
    tags: ["AI Integration", "Data Analytics", "UX Design"],
    gradient: "from-blue-500/80 to-purple-600/80",
    comingSoon: false
  },
  {
    title: "Neural Network Visualization",
    description: "Interactive 3D visualization of deep learning models",
    tags: ["Machine Learning", "WebGL", "Interactive Design"],
    gradient: "from-purple-600/80 to-pink-500/80",
    comingSoon: true
  },
  {
    title: "Predictive Maintenance System",
    description: "AI-driven system for industrial equipment monitoring",
    tags: ["IoT", "AI", "Industrial"],
    gradient: "from-cyan-500/80 to-blue-500/80",
    comingSoon: false
  }
];

const tagColors = {
  "AI Integration": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Data Analytics": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "UX Design": "bg-pink-500/20 text-pink-400 border-pink-500/30",
  "Machine Learning": "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  "WebGL": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "Interactive Design": "bg-teal-500/20 text-teal-400 border-teal-500/30",
  "IoT": "bg-green-500/20 text-green-400 border-green-500/30",
  "AI": "bg-violet-500/20 text-violet-400 border-violet-500/30",
  "Industrial": "bg-amber-500/20 text-amber-400 border-amber-500/30"
};

function CaseStudyCard({ study, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient}`} />
      
      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-pattern-slide" />
      
      {/* Content Container */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-dark-100 to-transparent">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {study.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05 }}
              className={`px-3 py-1 rounded-full text-xs font-medium border ${tagColors[tag]} backdrop-blur-sm`}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple transition-all duration-300">
          {study.title}
        </h3>
        
        <p className="text-gray-300 mb-4">
          {study.description}
        </p>

        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 20px rgba(45,108,223,0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="self-start px-6 py-2 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium shadow-lg"
        >
          View Case Study
        </motion.button>

        {/* Coming Soon Overlay */}
        {study.comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center bg-dark-100/80 backdrop-blur-sm">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl font-bold text-accent-blue"
            >
              Coming Soon
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function CaseStudies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,108,223,0.1)_0%,transparent_50%)]" />
      
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
            Featured Case Studies
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-accent-purple to-accent-gold">
            Our Success Stories
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Discover how we've helped businesses transform with AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.title} study={study} index={index} />
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
            View All Case Studies
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default CaseStudies;