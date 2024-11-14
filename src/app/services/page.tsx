'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from '../../components/services/ServiceCard';
import ServiceModal from '../../components/services/ServiceModal';
import { services as servicesData } from '@/data/services';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SVGProps } from 'react';

type GradientType = 
  | "from-emerald-400 to-teal-500"
  | "from-blue-400 to-indigo-600"
  | "from-violet-400 to-purple-600"
  | "from-rose-400 to-orange-500"
  | "from-sky-400 to-blue-600"
  | "from-purple-400 to-violet-600"
  | "from-teal-400 to-emerald-600"
  | "from-cyan-400 to-blue-600";

interface Service {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement> & {
    title?: string;
    titleId?: string;
  } & RefAttributes<SVGSVGElement>>;
  gradient: GradientType;
  details?: Record<string, any>;
}

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <section className="min-h-screen py-32 relative overflow-hidden" ref={ref}>
        {/* Background Gradients - Hidden on mobile */}
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          {/* Gradient Circles remain unchanged for desktop */}
          <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-500/5 to-indigo-500/5 blur-3xl" />
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/5 to-pink-500/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-3xl" />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: isMobile ? 0.3 : 0.6 }}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0.1 : 0.2 }}
              className="inline-block px-6 py-3 rounded-full text-lg font-semibold bg-blue-50 text-blue-600 border border-blue-100 mb-8"
            >
              Our Services
            </motion.span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Transformative AI Solutions
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Unleashing the Power of AI in Your Digital Journey
            </p>
          </motion.div>

          {/* Updated Services Grid to match the original styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/5 cursor-pointer"
                onClick={() => setSelectedService(service as Service)}
              >
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Content Container */}
                <div className="relative p-8">
                  {/* Icon Container */}
                  <div className="mb-6 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 blur-xl`} />
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} p-2.5 shadow-lg`}
                    >
                      <service.icon className="w-full h-full text-white" />
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold relative">
                      {/* Background text layer */}
                      <span className="text-gray-800 transition-opacity duration-300 group-hover:opacity-0">
                        {service.title}
                      </span>
                      {/* Gradient text layer */}
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {service.title}
                      </span>
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2 text-blue-500 font-medium pt-2 group-hover:text-purple-500 transition-colors duration-300"
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
                <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-10 blur-2xl group-hover:opacity-75 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0.2 : 0.8 }}
            className="text-center mt-16 sm:mt-20"
          >
            <motion.a
              href="https://wa.me/919833812505"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={isMobile ? {} : { 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(45,108,223,0.3)"
              }}
              whileTap={isMobile ? { scale: 0.98 } : { scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-light text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-400 to-violet-400 rounded-full hover:from-blue-500 hover:to-violet-500 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Schedule a Consultation</span>
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService || servicesData[0]}
      />
    </>
  );
}