import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import ServicesBento from '../components/home/ServicesBento';
import CaseStudies from '../components/home/CaseStudies';

function Home() {
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [statsRef, statsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [servicesRef, servicesInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [caseStudiesRef, caseStudiesInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 3.0,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="flex-grow">
        <motion.div
          ref={heroRef}
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <Hero />
        </motion.div>

        <motion.div
          ref={statsRef}
          variants={fadeInUp}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
        >
          <Stats />
        </motion.div>

        <motion.div
          ref={servicesRef}
          variants={fadeInUp}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
        >
          <ServicesBento />
        </motion.div>

        <motion.div
          ref={caseStudiesRef}
          variants={fadeInUp}
          initial="hidden"
          animate={caseStudiesInView ? "visible" : "hidden"}
        >
          <CaseStudies />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;