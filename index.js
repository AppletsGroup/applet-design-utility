const plugin = require('tailwindcss/plugin')
const css = require('./src/index')
module.exports = plugin(function ({ addComponents }) {
  addComponents(css)
})