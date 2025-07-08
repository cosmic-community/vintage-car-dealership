/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          black: '#0a0a0a',
          charcoal: '#1a1a1a',
          dark: '#2a2a2a',
          gold: '#d4af37',
          'gold-light': '#f4e098',
          'gold-dark': '#b8941f',
          rust: '#b7410e',
          'rust-light': '#d4552a',
          'rust-dark': '#8b3009',
          brown: '#8b4513',
          'brown-light': '#a0522d',
          'brown-dark': '#654321',
          cream: '#f5f5dc',
          'cream-dark': '#e6e6cd',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-vintage': 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #f4e098 100%)',
        'gradient-rust': 'linear-gradient(135deg, #b7410e 0%, #d4552a 100%)',
      },
      boxShadow: {
        'vintage': '0 4px 6px -1px rgba(212, 175, 55, 0.1), 0 2px 4px -1px rgba(212, 175, 55, 0.06)',
        'vintage-lg': '0 10px 15px -3px rgba(212, 175, 55, 0.1), 0 4px 6px -2px rgba(212, 175, 55, 0.05)',
      }
    },
  },
  plugins: [],
}