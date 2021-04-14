const webpack = require('webpack')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
var prodPlugins = []

if (isProd) {
  console.log("Building prod version...")
  prodPlugins = [
    new webpack.optimize.UglifyJsPlugin()
  ]
}

module.exports = {
  mode: "development",
  entry: './exec/index.tsx',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.json']
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loader: 'ts-loader' },
    ],
  },
}