import React, { createContext, useState, useContext } from 'react';

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const openQuiz = () => setIsQuizOpen(true);
  const closeQuiz = () => {
    setIsQuizOpen(false);
    setCurrentQuestion(0);
    setAnswers({});
  };

  const value = {
    isQuizOpen,
    openQuiz,
    closeQuiz,
    currentQuestion,
    setCurrentQuestion,
    answers,
    setAnswers
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
} 