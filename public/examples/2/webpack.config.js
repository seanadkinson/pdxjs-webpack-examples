module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js']
    }
};
