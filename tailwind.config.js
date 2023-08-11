/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors : {
        customColor: '#efc8ea',
        footerColor : '#d9f3f4'
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('flowbite/plugin')],
}

