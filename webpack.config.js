var WebpackNotifierPlugin = require('webpack-notifier');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    "script": "./src/index.js"
  },
  output: {
    path: "./",
    filename: "[name].js",
    publicPath: "/"
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /.(gif|jpg|png)(\?[a-z0-9=\.]+)?$/,
        loader: 'url?name=img/[name].[ext]&limit=100000'
      },
      {
        test: /.(woff2?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url?name=font/[name].[ext]&limit=100000'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.jade$/,
        loader: "jade"
      },
      {
        test: /\.styl$/,
        loader: "style!css!stylus"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
    ]
  },
  plugins: [
    new WebpackNotifierPlugin({title: 'Webpack'}),
  ],
  devtool: "#eval-source-map",
  devServer: {
    contentBase: "./"
  }
}
