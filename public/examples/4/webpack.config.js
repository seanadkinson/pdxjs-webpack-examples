module.exports = {
    devtool: "source-map",
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
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.coffee$/, loader: "coffee" },
            { test: /\.jade/, loader: "jade" },
            { test: /\.png/, loader: "url?limit=100000&mimetype=image/png" },
            { test: /\.gif/, loader: "url?limit=100000&mimetype=image/gif" },
            { test: /\.jpg/, loader: "file" }
        ]
    },
    resolveLoader: {
        moduleTemplates: ["*-webpack-loader", "*-web-loader", "*-loader", "*"]
    }
};
