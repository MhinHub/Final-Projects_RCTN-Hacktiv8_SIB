/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    fontFamily: {
      'serif': ['Lora', 'serif']
    },
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        'light': {
          'primary': '#1f1f1f',
          'primary-content': '#ffffff',
          'base-100': '#ffffff',
        }
      },
      {
        'dark': {
          'primary': '#ffffff',
          'primary-content': '#1f1f1f',
          'base-100': '#1f1f1f',
        }
      }
    ]
  }
}