process.env.NODE_ENV = '"production"'

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
console.log('NODE_EVN:' + process.env.NODE_ENV);

module.exports = {
  entry: {
    index: ['./src/index.js', './src/Test.ts', './src/HelloTs.tsx', './src/child.jsx'],
    vendor: ['react', 'react-dom','redux', 'lodash'],
    components: ['./src/components/Component1.tsx'],
    'porlet1/porlet1': ['./src/porlet1/index.js'],
    'porlet2/porlet2': ['./src/porlet2/index.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader", 
          use: [
            {
              loader: 'css-loader', 
              options: {
                minimize: true,
                modules: true
              }
            }
          ]
        })
      },
      {
        test: /\.(png|svg|jpg|gif|eot|ttf|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              useRelativePath: true,
              outputPath: 'images/',
              // publicPath: 'images/'
            },
          }
        ]
      },
      {
        test: /(\.jsx|\.js)$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        loader: "ts-loader",
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: process.env.NODE_ENV,
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      chunks: ['components', 'vendor', 'index'],
      template: './src/index.html',
      title: 'multi thunk',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['components', 'vendor', 'porlet1/porlet1'],
      template: './src/porlet1/index.html',
      title: 'multi thunk',
      filename: 'porlet1/index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['components', 'vendor', 'porlet2/porlet2'],
      template: './src/porlet2/index.html',
      title: 'multi thunk',
      filename: 'porlet2/index.html',
      inject: true
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console: true,
          drop_debugger: true,
        },        
        comments: false,
      }
    ),
    new ExtractTextPlugin({
      filename:  (getPath) => {
        console.log('show:' + JSON.stringify(getPath('[name].css')));
        return getPath('[name].css');
      },
      allChunks: true
    }
    ),
    new CopyWebpackPlugin([
      {
        from: './src/images', to:'./images'
      }
    ]),
  ]
};