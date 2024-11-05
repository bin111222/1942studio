/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#171717',
          100: '#1a1b1e',
          200: '#212226',
          300: '#2a2b2f',
          400: '#323438',
        },
        accent: {
          blue: '#2D7FFA',
          purple: '#8B5CF6',
          pink: '#EC4899',
          cyan: '#06B6D4',
        },
        glass: {
          dark: 'rgba(0, 0, 0, 0.3)',
          light: 'rgba(255, 255, 255, 0.1)',
        },
        neon: {
          blue: '#00F0FF',
          purple: '#8B5CF6',
          pink: '#FF1CF7',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(33,34,38,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(33,34,38,0.8) 1px, transparent 1px)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 4px #00F0FF, 0 0 8px #00F0FF' },
          '100%': { textShadow: '0 0 8px #00F0FF, 0 0 12px #00F0FF' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
} 