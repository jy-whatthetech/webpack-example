const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
  console.log(env);
  return {
    mode: env.development ? "development" : "production",
    output: {
      filename: "bundle.js"
    },
    plugins: [
      new HtmlWebpackPlugin(), new webpack.ProgressPlugin()
    ]
  }
};
