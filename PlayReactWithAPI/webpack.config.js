const { resolve } = require('path');
const webpack = require('webpack');
var OfflinePlugin = require('offline-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    // filename: 'bundle.js',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: resolve(__dirname, 'wwwroot/js'),
    publicPath: 'js/',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      async: true,
    }),
    new OfflinePlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader',],
        exclude: /node_modules/
      }
    ],
  }
};