const colors = require('tailwindcss/colors')

module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.gray,
      success: colors.green,
      info: colors.blue,
      warning: colors.yellow,
      danger: colors.red,
      indigo: colors.indigo,
      green: colors.green,
      blue: colors.green,
      yellow: colors.yellow,
      red: colors.red,
      gray: colors.gray,
      black: colors.black,
      white: colors.white,
      teal: colors.teal,
      transparent: colors.transparent
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
