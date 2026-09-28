/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#eef9fb',
          100: '#d7f0f4',
          200: '#b4e1e8',
          300: '#82cbd6',
          400: '#4caebd',
          500: '#2f8f9f',
          600: '#267483',
          700: '#245f6b',
          800: '#244f59',
          900: '#21434c'
        }
      },
      boxShadow: {
        soft: '0 20px 60px -35px rgba(15, 23, 42, 0.35)'
      }
    }
  },
  plugins: [],
}