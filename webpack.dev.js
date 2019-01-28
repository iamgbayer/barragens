const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const { PATH } = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: PATH.output
  }
})
