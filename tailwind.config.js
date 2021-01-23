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
      width: {
        '1000px': '1000px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
