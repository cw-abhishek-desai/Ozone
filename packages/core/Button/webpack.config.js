var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve("build"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: {
          //     presets: [
          //         '@babel/preset-env',
          //         '@babel/preset-react'
          //     ]
          // }
        },
      },
    ],
    
  },
  externals: {
    react: "react",
  },
};