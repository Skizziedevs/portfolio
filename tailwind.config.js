/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx}"
  ],
  theme: {
    screens: {
      sm: '768px',
      md: '1440px',
      
    },
    extend: {
      colors: {
        dgray: 'hsl(234, 25%, 52%)',
        dblue: 'hsl(233, 54%, 16%)',
        dpink: 'hsl(341, 92%, 62%)',
        lpink: 'hsl(341, 100%, 83%)',
        orange: 'hsl(13, 100%, 64%)',
        gpink: 'hsl(322, 87%, 55%)',
        lgray: 'hsl(232, 10%, 56%)'
        
      
     },
    },
  },
  plugins: [],
}
