var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: [/\.js?$/],
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
