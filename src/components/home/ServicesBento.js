import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: "AI-Powered Website Design",
    description: "Streamline your web presence with intelligent tools that automate design, development, and optimization processes.",
    icon: "🎨",
    gradient: "from-accent-blue to-accent-purple"
  },
  {
    title: "Branding & Design with AI",
    description: "Create stunning visual identities using AI-powered design tools that ensure consistency and impact.",
    icon: "✨",
    gradient: "from-accent-purple to-accent-pink"
  },
  {
    title: "Smart Content Creation",
    description: "Transform your content strategy with AI-powered tools that create engaging, optimized content at scale.",
    icon: "📝",
    gradient: "from-accent-pink to-accent-cyan"
  }
];

function ServicesBento() {
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
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Elevate your digital presence with our AI-powered solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card p-8 relative overflow-hidden hover:shadow-xl transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-0.5 mb-6`}>
                    <div className="w-full h-full bg-dark-200 rounded-[10px] flex items-center justify-center text-3xl">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesBento; 