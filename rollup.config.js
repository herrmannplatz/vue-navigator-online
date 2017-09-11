const buble = require('rollup-plugin-buble')
const pkg = require('./package.json')

module.exports = {
  input: 'src/index.js',
  name: 'vueNavigatorOneline',
  output: {
    file: pkg.main,
    format: 'umd'
  },
  useStrict: false,
  plugins: [buble()]
}