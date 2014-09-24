
var webpack = require("webpack");

module.exports = {
    devtool: "source-map",
    entry: {
        comments: "./comments/main.js",
        profile: "./profile/main.js"
    },
    output: {
        path: "./build/",
        filename: "bundle.[name].js"
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "jsx?harmony&insertPragma=React.DOM" },

            { test: /\.png/, loader: "url?limit=100000&mimetype=image/png" },
            { test: /\.gif/, loader: "url?limit=100000&mimetype=image/gif" },
            { test: /\.jpg/, loader: "file" },

            { test: /\.css/, loader: "style!css" },
            { test: /\.woff$/, loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.ttf$/, loader: "file" },
            { test: /\.eot$/, loader: "file" },
            { test: /\.svg$/, loader: "file" }
        ]
    },
    resolveLoader: {
        moduleTemplates: ["*-webpack-loader", "*-web-loader", "*-loader", "*"]
    },
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin("bundle.common.js")
    ]
};
