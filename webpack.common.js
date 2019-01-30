const webpack = require('webpack')

const PATH = require('./path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HappyPack = require('happypack')

module.exports = {
  output: {
    path: PATH.build
  },

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
        test: /node_modules\/.*\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: {
                '@primary-color': '#FF8764'
              }
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              icon: true
            }
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
