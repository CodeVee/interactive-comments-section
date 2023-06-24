const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'gray': {
        'very-light': '#F5F6FA',
        'light': '#E9EBF0'
      },
      'blue': {
        'moderate': '#5357B6',
        'light-grayish': '#C5C6EF',
        'grayish': '#67727E',
        'dark': '#334253'
      },
      'red': {
        'soft': '#ED6368'
      }
    },
    extend: {
      spacing: {
        '0.8': '0.8rem',
        '1.2': '1.2rem',
        '1.6': '1.6rem',
        '2.4': '2.4rem',
        '3.2': '3.2rem',
        '4.3': '4.3rem',
        '4.8': '4.8rem',
        '6.4': '6.4rem',
        '9.6': '9.6rem',
        '10.4': '10.4rem'
      },
      borderRadius: {
        'bs': '0.8rem'
      },
      fontSize: {
        'bs': '1.6rem'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
