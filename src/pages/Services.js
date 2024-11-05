import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    id: 'ai-web',
    title: "AI-Powered Website Design & Development",
    description: "Transform your digital presence with intelligent tools that automate design, development, and optimization processes.",
    icon: "🎨",
    features: [
      "AI-driven website builders for automated layout and content",
      "Personalized user experiences with AI algorithms",
      "Predictive analytics for user behavior insights",
      "Mobile-first responsive design optimization"
    ],
    benefits: [
      "Faster development time",
      "Improved user engagement",
      "Better conversion rates",
      "Data-driven design decisions"
    ],
    gradient: "from-accent-blue to-accent-purple"
  },
  {
    id: 'branding',
    title: "Branding & Graphic Design Amplified by AI",
    description: "Create stunning visual identities using AI-powered design tools that ensure consistency and impact.",
    icon: "✨",
    features: [
      "AI-powered logo design and brand identity creation",
      "Automated graphic creation for marketing materials",
      "Intelligent brand asset management system",
      "AI-driven visual content optimization"
    ],
    benefits: [
      "Consistent brand identity",
      "Rapid design iterations",
      "Cost-effective solutions",
      "Scalable design systems"
    ],
    gradient: "from-accent-purple to-accent-pink"
  },
  {
    id: 'content',
    title: "Content Creation Reimagined",
    description: "Transform your content strategy with AI-powered tools that create engaging, optimized content at scale.",
    icon: "📝",
    features: [
      "AI-powered copywriting and content optimization",
      "Automated video editing and production",
      "AI-generated imagery and video content",
      "Strategic content planning with AI insights"
    ],
    benefits: [
      "Efficient content creation",
      "Improved user engagement",
      "Data-driven content optimization",
      "Scalable content strategy"
    ],
    gradient: "from-accent-pink to-accent-cyan"
  },
  {
    id: 'seo',
    title: "SEO & Online Presence Optimization",
    description: "Maximize your digital visibility with AI-driven SEO strategies and analytics.",
    icon: "🎯",
    features: [
      "AI-powered keyword research and analysis",
      "Automated content optimization for search",
      "AI-driven social media management",
      "Strategic link building automation"
    ],
    benefits: [
      "Improved search engine rankings",
      "Increased organic traffic",
      "Data-driven SEO strategies",
      "Scalable SEO solutions"
    ],
    gradient: "from-accent-blue to-accent-pink"
  },
  {
    id: 'marketing',
    title: "AI-Driven Digital Marketing",
    description: "Leverage AI to create targeted, data-driven marketing campaigns that deliver results.",
    icon: "📊",
    features: [
      "AI-optimized ad campaign management",
      "Personalized email marketing automation",
      "Intelligent chatbot integration",
      "Conversion rate optimization with AI"
    ],
    benefits: [
      "Targeted marketing campaigns",
      "Increased conversion rates",
      "Data-driven marketing strategies",
      "Scalable marketing solutions"
    ],
    gradient: "from-accent-purple to-accent-blue"
  },
  {
    id: 'analytics',
    title: "AI Analytics & Insights",
    description: "Harness the power of AI to unlock deep insights and make data-driven decisions.",
    icon: "📈",
    features: [
      "Advanced data visualization",
      "Predictive analytics modeling",
      "Real-time performance tracking",
      "Custom reporting automation"
    ],
    benefits: [
      "Better decision making",
      "Predictive insights",
      "Performance optimization",
      "ROI maximization"
    ],
    gradient: "from-accent-cyan to-accent-purple"
  },
  {
    id: 'automation',
    title: "Business Process Automation",
    description: "Streamline operations with intelligent automation powered by AI.",
    icon: "⚡",
    features: [
      "Workflow automation solutions",
      "AI-powered task management",
      "Process optimization analysis",
      "Integration with existing systems"
    ],
    benefits: [
      "Increased efficiency",
      "Reduced costs",
      "Improved accuracy",
      "Scalable operations"
    ],
    gradient: "from-accent-pink to-accent-blue"
  },
  {
    id: 'consulting',
    title: "AI Strategy Consulting",
    description: "Expert guidance on implementing AI solutions for your business needs.",
    icon: "💡",
    features: [
      "AI readiness assessment",
      "Custom implementation planning",
      "Technology stack optimization",
      "Team training and support"
    ],
    benefits: [
      "Expert guidance",
      "Tailored solutions",
      "Risk mitigation",
      "Knowledge transfer"
    ],
    gradient: "from-accent-blue to-accent-cyan"
  }
];

function ServiceCard({ service, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="glass-card relative overflow-hidden h-full flex flex-col transform-gpu transition-all duration-500"
        animate={{
          scale: isHovered ? 1.02 : 1,
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? 5 : 0,
          z: isHovered ? 50 : 0
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
        
        <div className="relative z-10 flex flex-col h-full p-8">
          {/* Icon */}
          <div className="mb-6">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} p-[1px]`}>
              <div className="w-full h-full bg-dark-200 rounded-[10px] flex items-center justify-center text-2xl">
                {service.icon}
              </div>
            </div>
          </div>

          {/* Title & Description */}
          <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
            {service.title}
          </h3>
          
          <p className="text-gray-400 mb-8">
            {service.description}
          </p>

          {/* Features */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <div className={`w-1 h-4 rounded-full bg-gradient-to-r ${service.gradient}`} />
              Features
            </h4>
            <div className="space-y-3">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center space-x-2"
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                  <span className="text-gray-300 text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-auto">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <div className={`w-1 h-4 rounded-full bg-gradient-to-r ${service.gradient}`} />
              Benefits
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="p-3 text-center text-sm glass-card bg-dark-200/50"
                >
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Services() {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-dark-100">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-accent-blue/10 text-accent-blue border border-accent-blue/20 mb-4"
        >
          Our Solutions
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent"
        >
          AI-Powered Services
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Explore our comprehensive suite of AI solutions
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;