const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/Icon.tsx",
  output: {
    path: path.resolve(__dirname),
    filename: "Icon.js",
    libraryTarget: "commonjs2"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  externals: {
    react: "commonjs react"
  }
};
