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
        'very-light': '#F5F6FA'
      },
      'blue': {
        'moderate': '#5357B6',
        'light-grayish': '#C5C6EF'
      }
    },
    extend: {},
  },
  plugins: [],
};
