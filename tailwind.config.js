module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        bms:
          
      {
  50: '#edf1fc',
  100: '#d2d5e1',
  200: '#b6b8c8',
  300: '#999cb2',
  400: '#7d809b',
  500: '#636681',
  600: '#4d4f65',
  700: '#373949',
  800: '#2b3149',
  900: '#0a0a16',
     },
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
