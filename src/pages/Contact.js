import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const contactMethods = [
  {
    icon: EnvelopeIcon,
    title: "Email Us",
    description: "We'll respond within 24 hours",
    info: "info@1942studio.com",
    link: "mailto:info@1942studio.com"
  },
  {
    icon: PhoneIcon,
    title: "Call Us",
    description: "Direct Line",
    info: "+91 98338 12505",
    link: "tel:+919833812505"
  },
  {
    icon: MapPinIcon,
    title: "Location",
    description: "Global Reach, Remote Work",
    info: "We work remotely for our clients across the planet",
    link: "#"
  }
];

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setIsSubmitting(false);
    // Reset form or show success message
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg bg-dark-200/50 border border-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all duration-300"
            placeholder="John Doe"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 rounded-lg bg-dark-200/50 border border-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all duration-300"
            placeholder="john@example.com"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg bg-dark-200/50 border border-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all duration-300"
          placeholder="How can we help?"
          value={formState.subject}
          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          required
          rows={6}
          className="w-full px-4 py-3 rounded-lg bg-dark-200/50 border border-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all duration-300 resize-none"
          placeholder="Tell us about your project..."
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full px-8 py-4 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium text-lg shadow-lg 
          ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-xl'}`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </motion.button>
    </motion.form>
  );
}

function Contact() {
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
                Get in Touch
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-accent-purple to-accent-gold leading-tight md:leading-normal lg:leading-relaxed">
                Let's Build Something Amazing
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                Have a project in mind? We'd love to discuss how we can help bring your ideas to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods Grid */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-dark-200/50 backdrop-blur-sm border border-white/5 p-6 hover:bg-dark-200/70 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <method.icon className="w-8 h-8 text-accent-blue mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {method.description}
                    </p>
                    <span className="text-accent-blue font-medium">
                      {method.info}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-dark-200/30 backdrop-blur-sm rounded-2xl border border-white/5 p-8 md:p-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact; 