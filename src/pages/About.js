import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  BeakerIcon,
  LightBulbIcon,
  UserGroupIcon,
  SparklesIcon,
  CodeBracketIcon,
  CloudIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const values = [
  {
    title: "Innovation First",
    description: "Pushing boundaries with cutting-edge AI solutions and creative approaches.",
    icon: LightBulbIcon,
    gradient: "from-blue-500/80 to-purple-600/80"
  },
  {
    title: "Client Success",
    description: "Dedicated to delivering measurable results and exceeding expectations.",
    icon: SparklesIcon,
    gradient: "from-purple-600/80 to-pink-500/80"
  },
  {
    title: "Collaborative Approach",
    description: "Working closely with clients to understand and achieve their goals.",
    icon: UserGroupIcon,
    gradient: "from-cyan-500/80 to-blue-500/80"
  },
  {
    title: "Research Driven",
    description: "Leveraging the latest in AI research for practical applications.",
    icon: BeakerIcon,
    gradient: "from-emerald-500/80 to-cyan-500/80"
  }
];

const team = [
  {
    name: "Alex Chen",
    role: "AI Research Lead",
    description: "Leading innovation in artificial intelligence and machine learning solutions.",
    icon: CpuChipIcon,
    image: "/images/team/alex.jpg",
    gradient: "from-blue-500/80 to-purple-600/80",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Sarah Johnson",
    role: "ML Engineer",
    description: "Specializing in deep learning and neural network architectures.",
    icon: CodeBracketIcon,
    image: "/images/team/sarah.jpg",
    gradient: "from-purple-600/80 to-pink-500/80",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Michael Zhang",
    role: "Cloud Architect",
    description: "Expert in scalable AI infrastructure and cloud solutions.",
    icon: CloudIcon,
    image: "/images/team/michael.jpg",
    gradient: "from-cyan-500/80 to-blue-500/80",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Emma Davis",
    role: "Data Scientist",
    description: "Transforming complex data into actionable insights.",
    icon: ChartBarIcon,
    image: "/images/team/emma.jpg",
    gradient: "from-emerald-500/80 to-cyan-500/80",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "David Kim",
    role: "AI Product Manager",
    description: "Bridging technical innovation with business solutions.",
    icon: RocketLaunchIcon,
    image: "/images/team/david.jpg",
    gradient: "from-orange-500/80 to-red-500/80",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Lisa Wang",
    role: "Research Scientist",
    description: "Advancing the boundaries of AI capabilities.",
    icon: BeakerIcon,
    image: "/images/team/lisa.jpg",
    gradient: "from-pink-500/80 to-rose-500/80",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "James Wilson",
    role: "Solutions Architect",
    description: "Designing comprehensive AI implementation strategies.",
    icon: LightBulbIcon,
    image: "/images/team/james.jpg",
    gradient: "from-violet-500/80 to-purple-500/80",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Maria Garcia",
    role: "AI Ethics Lead",
    description: "Ensuring responsible and ethical AI development.",
    icon: SparklesIcon,
    image: "/images/team/maria.jpg",
    gradient: "from-indigo-500/80 to-blue-500/80",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];

function TeamMemberCard({ member, index }) {
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
        {/* Fallback colored gradient if image is loading/missing */}
        <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient}`} />
        
        {/* Profile Image */}
        <img
          src={member.image}
          alt={member.name}
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
        {/* Role Badge */}
        <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white text-sm font-medium shadow-lg">
          {member.role}
        </div>

        {/* Text Content */}
        <div className="pt-2">
          <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple transition-all duration-300">
            {member.name}
          </h3>
          
          <p className="text-gray-400 leading-relaxed mb-4">
            {member.description}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/5">
            {member.socials.linkedin && (
              <motion.a
                href={member.socials.linkedin}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-accent-blue hover:text-accent-purple transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>
            )}
            {member.socials.twitter && (
              <motion.a
                href={member.socials.twitter}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-accent-blue hover:text-accent-purple transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </motion.a>
            )}
            {member.socials.github && (
              <motion.a
                href={member.socials.github}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-accent-blue hover:text-accent-purple transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 blur-2xl group-hover:opacity-75 transition-opacity duration-500" />
    </motion.div>
  );
}

function About() {
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
                About Us
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-accent-purple to-accent-gold leading-tight md:leading-normal lg:leading-relaxed">
                Pioneering AI Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                Building the future of digital innovation through advanced artificial intelligence and creative excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 relative" ref={ref}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-purple">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Guided by innovation, driven by excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-dark-200/50 backdrop-blur-sm border border-white/5 p-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 blur-xl" />
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple p-2.5 shadow-lg"
                      >
                        <value.icon className="w-full h-full text-white" />
                      </motion.div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple transition-all duration-300">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-purple">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experts in AI, machine learning, and digital innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <TeamMemberCard
                  key={member.name}
                  member={member}
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

export default About; 