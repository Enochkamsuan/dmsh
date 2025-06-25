/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        Manrope:["PT Serif", "serif"]
      },
       colors: {
        primary: '#3795EB',
      },
    },
  },
  plugins: [],
}
