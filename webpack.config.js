const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  /* INPUT
  * Is filename or a set of named filenames which act as the entry 
  * point to build your project. You can pass multiple entries 
  * (every entry is loaded on startup). If you pass a pair in the 
  * form <name>=<request> you can create an additional entry point. 
  * It will be mapped to the configuration option entry.
  */
  entry: ['babel-polyfill','./src/index.js'],
  /* OUTPUT
  * A path and filename for the bundled file to be saved in. 
  * It will be mapped to the configuration options output.path 
  * and output.filename
  */
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  /* WEBPACK-DEV-SERVER
  * https://webpack.js.org/configuration/dev-server/#devserver-contentbase
  * https://webpack.js.org/configuration/dev-server/#devserver-publicpath-
  * https://webpack.js.org/configuration/dev-server/#devserver-port
  */
  devServer: {
    contentBase: './dist/'
  },
  /* PLUGINS
  * https://webpack.js.org/plugins/html-webpack-plugin/
  * 
  */
  plugins: [
    new HtmlWebpackPlugin({ title: 'React env', template: './src/index.html', inject: 'body'}),
    new ExtractTextPlugin({ filename: 'app.bundle.css' })
  ],
  /*
  * 
  */
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
  /*
  *
  */
};