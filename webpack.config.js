/* eslint-disable */

const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const configureDevServer = () => {
  return {
    contentBase: path.join(__dirname, "build"),
    host: "localhost",
    hot: true,
    inline: true,
    overlay: true,
    port: 8080,
  };
};

module.exports = {
  ...defaultConfig,
  devServer: configureDevServer(),
  entry: "./src/index.tsx",
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    ...defaultConfig.resolve,
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    ...defaultConfig.plugins,

    new BrowserSyncPlugin({
      files: "**/*.php",
      proxy: "http://exampleproject.local", // your dev server here
    }),
  ],
};
