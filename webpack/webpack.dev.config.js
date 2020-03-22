var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var parentDir = path.join(__dirname, '../');
module.exports = {
  entry: './index.js',

  module: {
    rules: [
      {
        test: /\.js$|\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },

  output: {
    path: path.join(parentDir, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
