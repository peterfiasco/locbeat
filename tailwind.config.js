const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/pagedone/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
