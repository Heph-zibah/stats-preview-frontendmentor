/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        
          'veryDarkBlue': 'hsl(233, 47%, 7%)',
          'darkDesaturatedBlue' : 'hsl(244, 38%, 16%)',
          'softViolet' : 'hsl(277, 64%, 61%)',

          'white':' hsl(0, 0%, 100%)',
          'transparentWhite' : 'hsla(0, 0%, 100%, 0.75)',
          'slightlyTransparentWhite' : 'hsla(0, 0%, 100%, 0.6)',
      }
    },
    fontFamily: {
     "inter": ["Inter", 'sans - serif'],
     "lexend": ["Lexend Deca", 'sans-serif'],
    },
  },
  plugins: [],
};

