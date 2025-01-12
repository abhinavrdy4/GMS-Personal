/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1a2f1c',
          accent: '#927b45',
          dark: '#000000',
        }
      }
    },
  },
  plugins: [],
};