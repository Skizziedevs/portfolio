/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx}"
  ],
  theme: {
    screens: {
      sm: '480px',
      xsmax: '414px',
      mid: "700px",
      md: '1024px',
      lg: '1900px',
      ipad: '768px',
      ld: '1400px',
      xlg:'2000px'
    },
    extend: {
      colors: {
      
     },
    },
  },
  plugins: [],
}
