/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato:['Lato', 'sans-serif']
      },
      colors:{
        'sim-blue':"#2C2D5B",
        'sim-orange':"#F67366",
        'sim-grey':'#4F4F4F'
      }
    },
  },
  plugins: [],
}