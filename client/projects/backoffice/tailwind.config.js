const colors = require('tailwindcss/colors')

const extendedColors = {
  primary: {
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
  success: {
    100: '#ECFBD2',
    200: '#D4F8A6',
    300: '#B1EA76',
    400: '#8CD551',
    500: '#5CBA21',
    600: '#449F18',
    700: '#2F8510',
    800: '#1E6B0A',
    900: '#125906',
  },
  info: {
    100: '#D7F4FF',
    200: '#B0E5FF',
    300: '#88D2FF',
    400: '#6BBFFF',
    500: '#3AA0FF',
    600: '#2A7CDB',
    700: '#1D5DB7',
    800: '#124193',
    900: '#0B2D7A',
  },
  warning: {
    100: '#FFF3D9',
    200: '#FFE4B4',
    300: '#FFD18E',
    400: '#FFBF72',
    500: '#FFA144',
    600: '#DB7D31',
    700: '#B75D22',
    800: '#934115',
    900: '#7A2D0D',
  },
  danger: {
    100: '#FFE3D7',
    200: '#FFC1B0',
    300: '#FF9788',
    400: '#FF706B',
    500: '#FF3A44',
    600: '#DB2A43',
    700: '#B71D40',
    800: '#93123B',
    900: '#7A0B38',
  }
}

module.exports = {
  prefix: '',
  purge: ['./src/**/*.{html,ts}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: extendedColors.primary,
        secondary: extendedColors.secondary,
        success: extendedColors.success,
        info: extendedColors.info,
        warning: extendedColors.warning,
        danger: extendedColors.danger
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
