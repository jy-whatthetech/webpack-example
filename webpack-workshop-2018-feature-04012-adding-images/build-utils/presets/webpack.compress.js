const CWPlugin = require("compression-webpack-plugin");

module.exports = () => ({
    plugins: [new CWPlugin()]
});