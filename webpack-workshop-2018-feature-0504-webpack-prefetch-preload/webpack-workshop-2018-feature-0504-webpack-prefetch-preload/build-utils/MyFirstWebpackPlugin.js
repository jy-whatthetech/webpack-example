class MyFirstWebpackPlugin {
    apply(compiler) {
        compiler.hooks.done.tapAsync("MyFirstWebpackPlugin", (stats, cb)=>{
            console.log(stats);
            cb();
        })
    }
}

module.exports = MyFirstWebpackPlugin;