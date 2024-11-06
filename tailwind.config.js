/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark': {
          100: '#0A0A0B',
          200: '#16171B',
          300: '#1E1F24',
        },
        'accent': {
          blue: '#2D6CDF',
          purple: '#6366F1',
          gold: '#F59E0B',
        },
        'glass': {
          dark: 'rgba(0, 0, 0, 0.3)',
        }
      },
      boxShadow: {
        'premium': '0 0 30px rgba(45, 108, 223, 0.05)',
        'premium-hover': '0 0 40px rgba(45, 108, 223, 0.1)',
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 