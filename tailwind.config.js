/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
      },
      colors: {
        n: {
          1: '#FCFDFF',
          2: '#C2C2C2',
          3: '#ADA8C3',
          4: '#757185',
          5: '#3F3A52',
          6: '#212525',
          7: '#15131D',
          8: '#0E0C15',
          9: '#474060',
          10: '#43435C',
          11: '#1B1B2E',
          12: '#2E2A41',
          13: '#6C7275',
          14: '#88889D',
        },
        bg: {
          1: '#E8F3FF',
        },
      },
    },
  },
};
