const webpack = require('webpack')

const PATH = require('./path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HappyPack = require('happypack')

module.exports = {
  resolve: {
    extensions: ['.js', '.less']
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
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        include: PATH.source,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader'
            // options: {
            //   modifyVars: {}
            // }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATH.public}/index.html`
    })
  ]
}
