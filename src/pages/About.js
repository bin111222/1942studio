import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const team = [
  {
    name: 'Varil',
    role: 'Founder & CEO',
    title: 'The Brains Behind 1942',
    image: '/team/varil.jpg',
    gradient: 'from-accent-blue to-accent-purple'
  },
  {
    name: 'Milo',
    role: 'Marketing Strategist',
    title: 'Creative Bug',
    image: '/team/milo.jpg',
    gradient: 'from-accent-purple to-accent-pink'
  },
  {
    name: 'Aava',
    role: 'Content Specialist',
    title: 'Master of Words and Storytelling',
    image: '/team/aava.jpg',
    gradient: 'from-accent-pink to-accent-cyan'
  },
  {
    name: 'Chris',
    role: 'SEO Expert',
    title: 'The Search Whisperer',
    image: '/team/chris.jpg',
    gradient: 'from-accent-blue to-accent-pink'
  },
  {
    name: 'Nova',
    role: 'AI Chatbot Architect',
    title: 'Conversation Guru',
    image: '/team/nova.jpg',
    gradient: 'from-accent-purple to-accent-blue'
  },
  {
    name: 'Zane',
    role: 'Social Media Manager',
    title: 'Viral Visionary',
    image: '/team/zane.jpg',
    gradient: 'from-accent-pink to-accent-purple'
  },
  {
    name: 'Kayla',
    role: 'Design Lead',
    title: 'Visual Maestro',
    image: '/team/kayla.jpg',
    gradient: 'from-accent-blue to-accent-purple'
  },
  {
    name: 'Marsh',
    role: 'Analytics Specialist',
    title: 'Data Detective',
    image: '/team/marsh.jpg',
    gradient: 'from-accent-purple to-accent-pink'
  }
];

function TeamMember({ member, index }) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass-card p-6 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        <div className="relative z-10">
          {/* Image container with gradient border */}
          <div className={`w-32 h-32 mx-auto mb-6 rounded-full p-1 bg-gradient-to-r ${member.gradient}`}>
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=random`;
                }}
              />
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {member.name}
            </h3>
            <p className="text-accent-blue font-medium mb-2">{member.role}</p>
            <p className="text-gray-400 text-sm">{member.title}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StorySection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent"
        >
          Our Story
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Founded in 2024",
              description: "A collective vision of tech enthusiasts who saw a gap in the industry, recognizing the untapped potential of AI in professional workflows.",
              gradient: "from-accent-blue to-accent-purple"
            },
            {
              title: "The Mission",
              description: "Bridging the gap between cutting-edge AI technology and practical, real-world applications for busy professionals.",
              gradient: "from-accent-purple to-accent-pink"
            },
            {
              title: "Our Approach",
              description: "Combining innovation with practicality to create AI solutions that are powerful, accessible, and immediately valuable.",
              gradient: "from-accent-pink to-accent-cyan"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient}`} />
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-300 text-lg max-w-3xl mx-auto"
        >
          We're not just implementing AI – we're reimagining how it can enhance and streamline existing workflows.
        </motion.p>
      </div>
    </section>
  );
}

function About() {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-dark-100">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent-blue/5 via-dark-100 to-dark-100" />
      </div>

      <div className="relative z-10">
        <StorySection />

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                The brilliant minds behind our AI innovations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <TeamMember key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About; 