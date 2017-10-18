const path    = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {

  entry: {
    app: './src/index.js'
  },

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },

  // module: {
  //   rules: [

  //     {
  //       test: /\.js$/,
  //       exclude: /(node_modules)/,
  //       use: [{
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['es2015', 'stage-0'],
  //         }
  //       }]
  //     },

  //     {
  //       test: /\.html$/,
  //       use: ['raw-loader']
  //     },

  //     {
  //       test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
  //       use: ['url-loader']
  //     }

  //   ]
  // },

  plugins: [

  //   new CleanWebpackPlugin(['dist']),

  //   new UglifyJSPlugin({
  //     parallel: {
  //       cache: true,
  //       workers: 2
  //     }
  //   })

    new webpack.BannerPlugin({
      banner: "#! /usr/bin/env node",
      raw: true
    })

  ]
  
}