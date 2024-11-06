import React from 'react';
import { motion } from 'framer-motion';

function QuizQuestion({ question, onAnswer, totalQuestions, currentQuestion }) {
  return (
    <div className="space-y-12">
      {/* Question */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-white text-center leading-relaxed"
      >
        {question.question}
      </motion.h3>

      {/* Options */}
      <div className="grid gap-6">
        {question.options.map((option, index) => (
          <motion.button
            key={option.text}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            onClick={() => onAnswer(option)}
            className="w-full p-6 text-left rounded-xl bg-dark-300/50 border border-white/5 hover:bg-dark-300 hover:border-accent-blue/20 transition-all duration-300 group relative overflow-hidden"
          >
            <span className="absolute top-1/2 -translate-y-1/2 left-6 text-2xl font-bold text-accent-blue/20 group-hover:text-accent-blue/40 transition-colors duration-300">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="text-lg font-medium text-white block pl-12">
              {option.text}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        ))}
      </div>

      {/* Feedback */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center text-lg text-gray-400 mt-8 px-4"
      >
        {question.feedback}
      </motion.div>
    </div>
  );
}

export default QuizQuestion; 