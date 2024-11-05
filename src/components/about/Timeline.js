import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: "2020",
    title: "Foundation",
    description: "1942 Studio was established with a vision to revolutionize digital presence through AI."
  },
  {
    year: "2021",
    title: "First Major Project",
    description: "Successfully launched our first enterprise-level AI chatbot solution."
  },
  {
    year: "2022",
    title: "Team Expansion",
    description: "Grew to a team of 10 specialists and opened our first physical office."
  },
  {
    year: "2023",
    title: "Innovation Award",
    description: "Received recognition for innovative AI solutions in web development."
  }
];

function Timeline() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200" />
        
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content */}
                <div className="w-1/2 px-8">
                  <div className="glass-card p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-2">{milestone.year}</h3>
                    <h4 className="text-lg font-medium mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Circle on timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4">
                  <div className="w-full h-full rounded-full bg-primary-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline; 