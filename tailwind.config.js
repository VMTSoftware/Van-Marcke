/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#002b48',
        'secondary': '#039de0',
        'grey': '#6b6b6b',
        'ace': '#e2293e',
        'tertiary': '#ec625b',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
}

