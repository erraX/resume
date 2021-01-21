module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      listStyleType: {
        square: 'square',
        roman: 'upper-roman',
        circle: 'circle',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
