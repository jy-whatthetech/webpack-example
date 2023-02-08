module.exports = () => ({
    resolveLoader: {
        alias: {
            "my-loader": resquire.resolve("../build-utils/my-loader.js")
        }
    },
    module: {
        rules: [
            {test: /\.js/, use: "my-loader"}
        ]
    }
});