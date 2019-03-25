const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 entry: './src/index.js',
 output: {
  filename: 'main.js',
  path: path.resolve(__dirname, './docs')
 },
 mode: 'development',
 module: {
  rules: [{
   test: /\.js$/,
   exclude: /node_modules/,
   use: {
    loader: 'babel-loader',
    options: {
     presets: ['@babel/preset-env']
    }
   }
  }]
 },
 plugins: [new HtmlWebpackPlugin()],
};