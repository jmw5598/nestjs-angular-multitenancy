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
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.gray,
        success: colors.green,
        info: colors.blue,
        warning: colors.yellow,
        danger: colors.red,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
