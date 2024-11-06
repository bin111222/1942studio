import React from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

function QuizResults({ answers, questions, onReset, onClose }) {
  // Calculate results
  const results = questions.map((question, index) => ({
    category: question.category,
    score: answers[index]?.score || 0,
    question: question.question,
    answer: answers[index]?.text || 'Not answered'
  }));

  // Get top priorities based on scores
  const priorities = [...results]
    .sort((a, b) => b.score - a.score);

  // Calculate overall score
  const maxPossibleScore = questions.length * 3;
  const totalScore = results.reduce((sum, result) => sum + result.score, 0);
  const scorePercentage = (totalScore / maxPossibleScore) * 100;

  return (
    <div className="relative max-h-[80vh] overflow-y-auto">
      <div className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="fixed top-6 right-6 p-2 text-gray-400 hover:text-white z-50 rounded-full bg-dark-200/50 backdrop-blur-sm border border-white/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <XMarkIcon className="w-6 h-6" />
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent 
                         bg-gradient-to-r from-accent-blue to-accent-purple">
              Your AI Journey Analysis
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Based on your responses, we've created a comprehensive analysis of your AI readiness and opportunities.
            </p>
          </motion.div>

          {/* Overall Score */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative bg-dark-200/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Score Circle */}
              <div className="relative w-48 h-48">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(45, 108, 223, 0.2)"
                    strokeWidth="8"
                  />
                  {/* Score circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={2 * Math.PI * 45 * (1 - scorePercentage / 100)}
                    initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - scorePercentage / 100) }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2D6CDF" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <motion.span 
                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-purple"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    {Math.round(scorePercentage)}%
                  </motion.span>
                  <span className="text-sm text-gray-400">AI Readiness</span>
                </div>
              </div>

              {/* Score Summary */}
              <div className="flex-1 space-y-4">
                <h4 className="text-2xl font-bold text-white">Your AI Readiness Score</h4>
                <p className="text-gray-400">
                  Your responses indicate {scorePercentage >= 70 ? 'strong potential' : 'opportunities'} for AI implementation 
                  across your business operations. Here's what your score means:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: 'Technical Readiness', value: Math.round(scorePercentage * 0.8) },
                    { label: 'Process Maturity', value: Math.round(scorePercentage * 0.9) },
                    { label: 'Innovation Potential', value: Math.round(scorePercentage * 1.1) },
                  ].map((metric) => (
                    <div key={metric.label} className="bg-dark-300/50 rounded-xl p-4">
                      <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
                      <div className="text-xl font-bold text-white">{metric.value}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Priority Areas */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-white text-center">Priority Areas for AI Implementation</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {priorities.map((priority, index) => (
                <motion.div
                  key={priority.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-dark-200/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 overflow-hidden group"
                >
                  {/* Score Indicator */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-2">
                      <ArrowUpIcon className={`w-4 h-4 ${priority.score === 3 ? 'text-green-500' : 'text-yellow-500'}`} />
                      <span className={`text-sm font-medium ${priority.score === 3 ? 'text-green-500' : 'text-yellow-500'}`}>
                        {priority.score === 3 ? 'High Priority' : 'Medium Priority'}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-accent-blue mb-3">
                    {priority.category}
                  </h4>
                  <p className="text-gray-400 mb-4">
                    {questions.find(q => q.category === priority.category)?.feedback}
                  </p>

                  {/* Implementation Timeline */}
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <div className="text-sm text-gray-400 mb-2">Recommended Timeline</div>
                    <div className="flex items-center gap-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded-full ${
                            i < priority.score
                              ? 'bg-gradient-to-r from-accent-blue to-accent-purple'
                              : 'bg-dark-300'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {priority.score === 3 ? 'Immediate (1-3 months)' : 
                       priority.score === 2 ? 'Medium-term (3-6 months)' : 
                       'Long-term (6+ months)'}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col gap-6 pt-6"
          >
            <button
              onClick={() => {
                window.location.href = '/contact';
                onClose();
              }}
              className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple 
                       text-white font-medium text-lg hover:shadow-lg transition-all duration-300
                       hover:shadow-accent-blue/25"
            >
              Schedule a Consultation
            </button>
            
            <div className="flex gap-6">
              <button
                onClick={onReset}
                className="flex-1 px-8 py-4 rounded-xl border border-white/10 text-gray-400 
                         hover:bg-dark-300 transition-all duration-300"
              >
                Retake Quiz
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-8 py-4 rounded-xl border border-white/10 text-gray-400 
                         hover:bg-dark-300 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default QuizResults; 