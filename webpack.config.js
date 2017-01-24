var path = require('path');
var webpack = require("webpack");
var node_modules = path.resolve(__dirname, 'node_modules');

var config = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, 'src/main')
    ],
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'built/local'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file?limit=1024*200'
            },
        ]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;



