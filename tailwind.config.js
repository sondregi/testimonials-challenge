module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors: {
        challengeColors: {
         lightGray: '#cfcfcf',
         lightGrayishBlue: '#ecf2f8',
         moderateViolet: '#7541c8',
         darkGrayishBlue: '#48556a',
         darkBlackishBlue: '#19212e',
        },
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }