process.env.NODE_ENV = '"production"'

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
console.log(`process.env.NODE_ENV: + ${process.env.NODE_ENV}`);

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    index: [resolve('src/index')],
    vendor: ['react', 'react-dom','redux', 'lodash'],
    components: [resolve('src/components')],
    'porlet1/porlet1': [resolve('src/porlet1')],
    'porlet2/porlet2': [resolve('src/porlet2')],
  },
  output: {
    filename: '[name].js',
    path: resolve('dist'),
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
          resolve("src")
        ],
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
      {
        test: /(\.tsx|\.ts)$/,
        include: [
          resolve("src")
        ],
        loader: "ts-loader",
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': resolve("src")
    }
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'components',
      chunks: ['components', 'index', 'porlet1/porlet1', 'porlet2/porlet2'],
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      chunks: ['components', 'vendor', 'index'],
      template: resolve('src/index/index.html'),
      title: 'multi thunk',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['components', 'vendor', 'porlet1/porlet1'],
      template: resolve('src/porlet1/index.html'),
      title: 'multi thunk',
      filename: 'porlet1/index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['components', 'vendor', 'porlet2/porlet2'],
      template: resolve('src/porlet2/index.html'),
      title: 'multi thunk',
      filename: 'porlet2/index.html',
      inject: true
    }),
    // 压缩css和js
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
        from: resolve('src/images'), to:'./images'
      },
      {
        from: resolve('src/assets'), to:'./assets'
      }
    ]),
  ]
};