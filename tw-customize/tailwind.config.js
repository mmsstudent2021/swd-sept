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
        'secondary': '#dd7fef', // Comma added here
        'accent': '#e94ed6'
      },
      fontFamily : {
        'noto-mm' : ["Noto Serif Myanmar",'sans-serif'],
        'poppins' :[ "Poppins",'sans-serif'],
        'noto-poppins' : ["Poppins","Noto Serif Myanmar", 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
  
}
