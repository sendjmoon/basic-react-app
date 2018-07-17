'use strict';

const ExtractText = require('extract-text-webpack-plugin');

const API_URL = process.env.API_URL || 'http://localhost:3000';

module.exports = {
  entry: `${__dirname}/app.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public/js`,
  },

  // watch: true,
  // watchOptions: {
  //   aggregateTimeout: 300,
  //   poll: 1000,
  //   ignored: /node_modules/,
  // },

  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  },
}
