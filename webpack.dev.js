var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var packageJson = require('./package.json');
var path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    module: {
        rules:
        [
            {
                test: /\.tsx?$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: path.join(process.cwd(), 'angular', 'tsconfig.json'),
                        },
                    },
                    'angular2-template-loader',
                    'angular-router-loader',
                ],
                include: [
                    path.join(process.cwd(), 'angular'),
                ],
            },
        ]
    },
    mode: 'development'
});
