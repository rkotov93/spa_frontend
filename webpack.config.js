var path = require("path")
var webpack = require("webpack")

module.exports = {
  entry: [
    "babel-polyfill",
    "webpack-hot-middleware/client?reload=true",
    "./src/index.js"
  ],
  output: {
    path: __dirname,
    filename: "build/bundle.js"
  },
  plugins: [
    // Webpack 1.0
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: "eslint",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.jsx?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loaders: ["babel"]
      }
    ]
  },
  eslint: {
    configFile: "./.eslintrc"
  }
};
