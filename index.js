const plugin = require('tailwindcss/plugin')
const css = require('./src/index')
console.log(css)
module.exports = plugin(function ({ addComponents }) {
  addComponents(css)
})