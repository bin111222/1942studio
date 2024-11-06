import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    category: "Data Analytics",
    description: "Real-time data visualization platform with predictive analytics capabilities.",
    image: "/images/portfolio/analytics.jpg",
    tags: ["AI", "Data Visualization", "React"],
    link: "#"
  },
  {
    title: "Neural Network Visualization",
    category: "Machine Learning",
    description: "Interactive 3D visualization of deep learning model architectures.",
    image: "/images/portfolio/neural.jpg",
    tags: ["Machine Learning", "WebGL", "Three.js"],
    link: "#"
  },
  {
    title: "Predictive Maintenance System",
    category: "Industrial AI",
    description: "IoT-based system for predicting equipment maintenance needs.",
    image: "/images/portfolio/maintenance.jpg",
    tags: ["IoT", "AI", "Python"],
    link: "#"
  },
  {
    title: "Intelligent Customer Service Bot",
    category: "NLP",
    description: "Advanced chatbot with natural language understanding capabilities.",
    image: "/images/portfolio/chatbot.jpg",
    tags: ["NLP", "Machine Learning", "Node.js"],
    link: "#"
  },
  {
    title: "Computer Vision Quality Control",
    category: "Computer Vision",
    description: "Automated quality inspection system using computer vision.",
    image: "/images/portfolio/vision.jpg",
    tags: ["Computer Vision", "Python", "TensorFlow"],
    link: "#"
  },
  {
    title: "AI Content Generation Platform",
    category: "Content Generation",
    description: "Platform for generating and optimizing marketing content using AI.",
    image: "/images/portfolio/content.jpg",
    tags: ["GPT-3", "React", "Node.js"],
    link: "#"
  }
];

function PortfolioCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-dark-200/50 backdrop-blur-sm border border-white/5"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/80 to-accent-purple/80" />
        
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-dark-200/50 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative p-6">
        {/* Category Badge */}
        <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white text-sm font-medium shadow-lg">
          {project.category}
        </div>

        {/* Text Content */}
        <div className="pt-2">
          <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple transition-all duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-400 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View Project Link */}
          <motion.a
            href={project.link}
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-accent-blue font-medium hover:text-accent-purple transition-colors duration-300"
          >
            View Project
            <svg 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 blur-2xl group-hover:opacity-75 transition-opacity duration-500" />
    </motion.div>
  );
}

function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative min-h-screen">
      {/* Background with seamless gradient */}
      <div className="fixed inset-0 bg-dark-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,108,223,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-6 py-3 rounded-full text-lg font-semibold bg-accent-blue/10 text-accent-blue border border-accent-blue/20 mb-8"
              >
                Our Portfolio
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-accent-purple to-accent-gold leading-tight md:leading-normal lg:leading-relaxed">
                Featured Projects
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                Explore our collection of innovative AI solutions and transformative digital experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 relative" ref={ref}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <PortfolioCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Portfolio; 