const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
        colors: {
        seagreen: '#2e8b57',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Make sure this is correct
  plugins: [],
};