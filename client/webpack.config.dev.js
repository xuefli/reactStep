process.env.NODE_ENV = '"development"'

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
console.log(`process.env.NODE_ENV: + ${process.env.NODE_ENV}`);

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
    // publicPath: path.relative(__dirname, 'dist'),
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist/',
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}, 
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|eot|ttf|woff)$/,
        use: ['file-loader']
      },
      {
        test: /(\.jsx|\.js)$/,
        include: [
          path.resolve(__dirname, "src")
        ],
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
    // new CleanWebpackPlugin(['dist']),
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
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
    new webpack.HotModuleReplacementPlugin(),
  ]
};