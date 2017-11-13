const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    verbose: ['react', 'react-dom','redux', 'lodash'],
    components: ['./src/Test.ts', './src/HelloTs.tsx', './src/child.jsx'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader",]
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
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'multi thunk',
      filename: 'index.html',
      inject: true
    })
  ]
};