var path = require("path")
var webpack = require("webpack")

module.exports = {
  entry: [
    "whatwg-fetch",
    "babel-polyfill",
    "./src/index.js"
  ],
  output: {
    path: path.join(__dirname, "public/build"),
    filename: "bundle.js",
    publicPath: "/build"
  },
  plugins: [
    // Webpack 1.0
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "API_HOST": JSON.stringify("http://35.156.233.82/")
      }
    })
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
        loader: ["style", "css"]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.jsx?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loaders: ["babel"]
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  eslint: {
    configFile: "./.eslintrc"
  }
};
