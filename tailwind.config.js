/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-color': '#F1F3F6',
        'input-bg': '#F1F3F6',
        'placeholder': '#555555',
        'secondary': '#90118B',
        'off-secondary': '#D31FCC',
        'text-color': '#9197B3',
        'off-Green' : '#D3FFE7'
      },
      spacing:{
        '3%' : '3%',
        '5%': '5%',
        '15%': '15%',
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',

        '0 auto': '0px auto'
      }
    },
  },
  plugins: [],
}
