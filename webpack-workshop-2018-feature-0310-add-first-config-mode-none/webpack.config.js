const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
  console.log(env);
  return {
    mode: env.mode,
    output: {
      filename: "bundle.js"
    }
  }
};
