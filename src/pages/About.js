import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const coreValues = [
  {
    icon: "💡",
    title: "Innovation at the Forefront",
    description: "We constantly push boundaries with pioneering AI solutions and creative problem-solving. Our commitment to innovation drives us to bring the latest technology to empower your business.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: "🎯",
    title: "Client-Centric Success",
    description: "Your success is our top priority. We go beyond delivering AI solutions, aiming for measurable outcomes that exceed expectations. We succeed when you succeed.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: "🤝",
    title: "Collaborative Partnership",
    description: "Collaboration is at the heart of our approach. We work closely with you, combining insights to build AI solutions that align perfectly with your unique vision and goals.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: "🔬",
    title: "Research-Driven Excellence",
    description: "We stay at the cutting edge of AI research to bring practical, effective solutions to real-world problems. Our data-driven insights and constant learning fuel transformative results for your business.",
    color: "from-purple-500 to-purple-600"
  }
];

const teamMembers = [
  {
    name: "Varil",
    title: "Founder",
    image: "/images/team/varil.webp",
    description: "The Big Brain"
  },
  {
    name: "Axel",
    title: "Marketing Strategist",
    image: "/images/team/axel.webp",
    description: "Creative Bug"
  },
  {
    name: "Ava",
    title: "Content Specialist",
    image: "/images/team/ava.webp",
    description: "Master of Words and Storytelling"
  },
  {
    name: "Harry",
    title: "SEO Expert",
    image: "/images/team/harry.webp",
    description: "The Search Whisperer"
  },
  {
    name: "Agastya",
    title: "AI Chatbot Architect",
    image: "/images/team/Agastya.webp",
    description: "Conversation Guru"
  },
  {
    name: "Priya",
    title: "Social Media Manager",
    image: "/images/team/Priya.webp",
    description: "Viral Visionary"
  },
  {
    name: "Alia",
    title: "Design Lead",
    image: "/images/team/alia.webp",
    description: "Visual Maestro"
  },
  {
    name: "Kai",
    title: "Analytics Specialist",
    image: "/images/team/kai.webp",
    description: "Data Detective"
  }
];

const CoreValueCard = ({ value }) => {
  return (
    <div className="group relative bg-[#0A0A0B] rounded-2xl p-8 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className="bg-blue-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <span className="text-3xl">{value.icon}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
          {value.title}
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed">
          {value.description}
        </p>
      </div>
    </div>
  );
};

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-[#0A0A0B] rounded-2xl overflow-hidden border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
      <div className="relative pb-[75%]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#000000] opacity-40" />
        <img
          src={member.image}
          alt={member.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-8 flex-grow flex flex-col">
        <div className="mb-4">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
            {member.title}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{member.name}</h3>
        <p className="text-gray-400 text-lg">{member.description}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - 1942 Studio | Our Team & Vision</title>
        <meta 
          name="description" 
          content="Meet our team of AI experts and innovators at 1942 Studio. We're pushing the boundaries of artificial intelligence and creative technology."
        />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-black"
      >
        {/* Hero Section */}
        <section className="pt-40 pb-32">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <span className="inline-block px-8 py-3 rounded-full bg-[#0A0A0B] text-blue-500 font-medium text-lg border border-blue-500/30">
                About Us
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8 leading-tight pb-2"
            >
              Pioneering AI Solutions
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl text-gray-400 text-center max-w-3xl mx-auto"
            >
              Building the future of digital innovation through advanced artificial intelligence
              and creative excellence.
            </motion.p>
          </div>
        </section>

        {/* Core Values Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-32 bg-[#030303]"
        >
          <div className="container mx-auto px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-6 leading-tight pb-2"
            >
              Our Guiding Principles
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-400 text-center mb-20 max-w-3xl mx-auto"
            >
              Empowering Progress Through Innovation, Partnership, and Excellence
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <CoreValueCard value={value} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-32"
        >
          <div className="container mx-auto px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-6"
            >
              Meet Our Team
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-400 text-center mb-20 max-w-3xl mx-auto"
            >
              A diverse group of experts passionate about pushing the boundaries of AI technology
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <TeamMemberCard member={member} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
};

export default About;