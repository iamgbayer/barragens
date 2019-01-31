const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('./path')

const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.data,
        to: path.build
      }
    ])
  ]
})
