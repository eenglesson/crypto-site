/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      maxWidth: {
        '14xl': '1400px',
        '16xl': '1600px',
        '18xl': '1800px',
        '11xl': '2000px', // Custom max width for 2000px
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      backdropFilter: {
        none: 'none',
        blur: 'blur(30px)',
      },

      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
      },
      boxShadow: {
        mini: '0px 4px 33px 0px rgba(7, 10, 33, 0.13)',
      },
      colors: {
        n: {
          1: '#FCFDFF',
          2: '#C2C2C2',
          3: '#ADA8C3',
          4: '#757185',
          5: '#828493',
          6: '#ECEEF6',
          7: '#2E2E2E',
          8: '#0E0C15',
          9: '#474060',
          10: 'rgb(3, 189, 3)',
          11: '#1B1B2E',
          12: '#2E2A41',
          13: '#6C7275',
          14: '#88889D',
        },
        bg: {
          1: '#DEEEFF',
          5: '#828493',
        },
      },
    },
  },
};
