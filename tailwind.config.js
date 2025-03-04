/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7214FF',
        secondary: '#4E1BA6',
        accent: '#00D5FF',
        'text': {
          'primary': '#1B1C31',
          'secondary': '#6F6C90'
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #7214FF 0%, #4E1BA6 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #00D5FF 0%, #4E1BA6 100%)'
      },
      maxWidth: {
        '7xl': '80rem',
      }
    }
  },
  plugins: [],
} 