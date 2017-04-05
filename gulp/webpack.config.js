const path = require('path');
const webpack = require('webpack');
const config = {
    context: path.resolve(__dirname, '../', 'app'),
    entry: {
        app: './js/main.js'
    },
    output: {
        path: path.join(__dirname, '../', '/dist/js'),
        filename: '[name].js',
        publicPath: '/js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: ['babel-loader'],
            exclude: /node_modules/
        }]
    },
};

module.exports = config;