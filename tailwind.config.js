/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
      container: {
        center: true,
        padding: '16px',
      },
    extend: {
      colors: {
        primary: 'rgb(20 184 166)',
        dark: 'rgb(15 23 42)',
        secondary: 'rgb(100 116 139)'
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
