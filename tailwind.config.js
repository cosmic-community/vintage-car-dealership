/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'vintage-cream': '#F3E5AB',
        'vintage-gold': '#DAA520',
        'vintage-rust': '#A0522D',
        'vintage-charcoal': '#36454F',
        'vintage-dark': '#2C3E50',
        'vintage-black': '#1C1C1C',
        'vintage-brown': '#8B4513',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide': 'slide 8s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'road-lines': 'road-lines 3s linear infinite',
        'smoke': 'smoke 2s ease-out infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-10px) translateX(5px)' },
          '50%': { transform: 'translateY(-5px) translateX(-3px)' },
          '75%': { transform: 'translateY(-15px) translateX(2px)' },
        },
        slide: {
          '0%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.8', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.3)' },
        },
        'road-lines': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        smoke: {
          '0%': { 
            opacity: '0.8', 
            transform: 'translateY(0) scale(0.8)' 
          },
          '100%': { 
            opacity: '0', 
            transform: 'translateY(-30px) scale(1.2)' 
          },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}