
var path = require('path');
var webpack = require('webpack');
var BUILD_DIR = path.resolve(__dirname, 'app/build');
var APP_DIR = path.resolve(__dirname, 'app');
//const STYLE = path.join(__dirname, 'app/css/style.css');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var combineLoaders = require('webpack-combine-loaders');

module.exports = {

  entry: { 
    entry: APP_DIR+'/app.js'//,
    //style: STYLE
  },


  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },



  devtools: 'source-map',

  module: {

    loaders: [
      { test : /\.css$/, loader : "style-loader!css-loader"},
      { test : /\.less$/, loader : "style-loader!css-loader!less-loader"},
      //{ test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
     
      /* {
      test: /\.css$/,
      loader: combineLoaders([
        {
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
      ])
    },*/

      { test : /\.gif$/, loader : "url-loader?mimetype=image/png"},
      
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

};
