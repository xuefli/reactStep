const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
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
};