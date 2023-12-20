/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        popi: 'Poppins',
        meri: 'Merriweather',
      },
      fontSize: {
        xxs: '0.5rem',
        0.5: '0.5rem',
      },
      width: {
        1024: '1024px',
        672: '672px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
