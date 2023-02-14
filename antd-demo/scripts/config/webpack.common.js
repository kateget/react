const path = require('path')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../../src/App.tsx'),
  },
  output: {
    filename: 'js/[name].[hash:8].tsx',
    path: path.resolve(__dirname, '../../dist'),
  },
}
