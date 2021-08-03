const { resolve } = require("path");
const nodeExternals = require("webpack-node-externals");

const serverConfig = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/server/server.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  output: {
    filename: "server.js",
    path: resolve(__dirname, "dist"),
  },
  target: "node",
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
};

const clientConfig = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/client/index.jsx",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss"],
  },
  output: {
    filename: "app.js",
    path: resolve(__dirname, "public/js"),
  },
};

module.exports = [serverConfig, clientConfig];
