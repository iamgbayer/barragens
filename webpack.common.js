const webpack = require('webpack')

const { join } = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HappyPack = require('happypack')

export const PATH = {
  source: join(process.cwd(), `src`),
  output: join(process.cwd(), 'dist')
}

module.exports = {
  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: PATH.source,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
