/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        'lionred':'#ef1f42',
        'lionblack':'#0a161c',
        'github':'#6e5494'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

