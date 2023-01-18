const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ development, presets } = { development: false, presets: [] }) => {
  return {
    mode: development ? "development" : "production",
    output: {
      filename: "bundle.js"
    },
    plugins: [
      new HtmlWebpackPlugin(), new webpack.ProgressPlugin()
    ]
  }
};
