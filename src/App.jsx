import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark')
  }, [])

  return (
    // Add dark mode classes to your elements
    <div className="min-h-screen bg-white dark:bg-dark-primary text-black dark:text-white">
      {/* Your existing app content */}
    </div>
  )
} 