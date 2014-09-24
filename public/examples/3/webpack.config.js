module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolveLoader: {
        moduleTemplates: ["*-webpack-loader", "*-web-loader", "*-loader", "*"]
    }
};
