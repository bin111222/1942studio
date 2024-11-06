/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#000000',
          200: '#111111',
          300: '#1a1a1a',
        },
        'accent-blue': '#2D6CDF',
        'accent-purple': '#8B5CF6',
        'accent-gold': '#DCA546',
        'glass-dark': 'rgba(17, 17, 17, 0.7)',
        'glass-light': 'rgba(255, 255, 255, 0.1)',
      },
      boxShadow: {
        'premium': '0 0 30px rgba(45, 108, 223, 0.1)',
        'premium-hover': '0 0 40px rgba(45, 108, 223, 0.2)',
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(to right, #2D6CDF, #8B5CF6)',
      },
    },
  },
  plugins: [],
} 