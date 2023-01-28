const webpackMerge = require("webpack-merge");

const applyPreset = env => {
    /** @type {string[]} */
    const { presets } = env;
    const mergedPresets = [].concat(...[presets]);
    console.log(mergedPresets);
    const mergedConfigs = mergedPresets.map(presetName =>
        require(`./presets/webpack.${presetName}`)(env)
    );

    return webpackMerge({}, ...mergedConfigs);
};

module.exports = applyPreset;