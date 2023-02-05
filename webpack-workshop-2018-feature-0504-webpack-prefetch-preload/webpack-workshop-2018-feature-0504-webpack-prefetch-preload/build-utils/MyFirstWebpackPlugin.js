class MyFirstWebpackPlugin {
    apply(compiler) {
        compiler.hooks.done.tapAsync("MyFirstWebpackPlugin", (stats, cb)=>{
            console.log(stats);
            for (let assetName in stats.compilation.assets) {
                assetNames.push(assetName);
            }
            console.log(assetNames.join("\n"));
            cb();
        })
    }
}

module.exports = MyFirstWebpackPlugin;