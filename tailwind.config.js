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
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}
//plugin animasi
module.exports = {
  theme: {
      extend: {
          keyframes: {
              fadeIn: {
                  '0%': { opacity: '0', transform: 'translateY(-20px)' },
                  '100%': { opacity: '1', transform: 'translateY(0)' },
              },
          },
          animation: {
              fadeIn: 'fadeIn 10s ease-in-out',
          },
      },
  },
  plugins: [],
};
