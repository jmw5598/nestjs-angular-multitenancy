const colors = require('tailwindcss/colors')

module.exports = {
  prefix: '',
  purge: ['./src/**/*.{html,ts}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#E0F6FE',
          100: '#E0F6FE',
          200: '#C2EAFD',
          300: '#A3D9FA',
          400: '#8BC7F6',
          500: '#65ADF1',
          600: '#4987CF',
          700: '#3265AD',
          800: '#20468B',
          900: '#133173',
        },
        secondary: colors.gray,
        success: colors.green,
        info: colors.blue,
        warning: colors.yellow,
        danger: colors.red
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
