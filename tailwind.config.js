const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    'transition-all', 'duration-300', 'hover:scale-105', // etc.
  ],
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
theme: {
  extend: {
    colors: {
      seagreen: '#2E8B57'
    }
  }
}