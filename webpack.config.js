module.exports = {
    /** Build from built js file */
    entry: {
      typestyle: './lib/Api.js',
    },
    output: {
        filename: './umd/index.js',
        libraryTarget: 'umd',
        library: 'myModule'
    }
};
