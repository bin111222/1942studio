import React from 'react';
import { motion } from 'framer-motion';

function TeamMember({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="neomorphic p-6 text-center"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden"
      >
        <div className="w-full h-full bg-primary-100 flex items-center justify-center text-4xl">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          ) : (
            member.name.charAt(0)
          )}
        </div>
      </motion.div>

      <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
      <p className="text-primary-600 mb-2">{member.role}</p>
      <p className="text-gray-600 text-sm">{member.description}</p>

      {member.social && (
        <div className="flex justify-center space-x-4 mt-4">
          {Object.entries(member.social).map(([platform, link]) => (
            <a
              key={platform}
              href={link}
              className="text-gray-400 hover:text-primary-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fab fa-${platform}`}></i>
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default TeamMember; 