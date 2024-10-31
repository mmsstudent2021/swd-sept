/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  
  ],
  theme: {
    extend: {
      colors: {
        'text': '#030214',
        'background': '#f7f7fe',
        'primary': '#2e22e4',
        'secondary': '#dd7fef',
        'accent': '#e94ed6',
      },
      fontFamily : {
        'noto-mm' : ["Noto Serif Myanmar",'san-serif'],
        'poppins' :[ "Poppins",'san-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

