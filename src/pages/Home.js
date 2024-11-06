import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import ServicesBento from '../components/home/ServicesBento';
import CaseStudies from '../components/home/CaseStudies';

function Home() {
  const [heroRef, heroInView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const [statsRef, statsInView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const [servicesRef, servicesInView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const [caseStudiesRef, caseStudiesInView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  return (
    <div className="relative min-h-screen bg-black">
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-black" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: heroInView ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Hero />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: statsInView ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Stats />
        </motion.div>

        {/* Services Section */}
        <motion.div
          ref={servicesRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: servicesInView ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <ServicesBento />
        </motion.div>

        {/* Case Studies Section */}
        <motion.div
          ref={caseStudiesRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: caseStudiesInView ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <CaseStudies />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;