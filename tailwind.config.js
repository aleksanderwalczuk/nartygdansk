const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        default: '#111111',
        red: {
          'default': '#FF6B6B',
          '300': '#FFBABA',
          '400': '#FF8F8F',
          '500': '#FF6B6B',
          '600': '#FF4C4C',
          '700': '#E92525',
        },
      },
      fontFamily: {
        sans: [
          '"Open Sans Condensed"',
          '-apple-system',
        ],
        serif: [
          '"Lora"',
          '-apple-system',
        ],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}