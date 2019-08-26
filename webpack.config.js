var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var packageJson = require('./package.json');
var path = require('path');

module.exports = {
    entry: {
        polyfills: "./angular/src/polyfills",
        vendor: Object.keys(packageJson.dependencies),
        app: "./app/index.js"
    },
    output: {
        path: path.join(__dirname, "/dist/"),
        filename: "[name].bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname,"/dist/"),
        port:9000
    },
    resolve: {
		extensions: ['.js', '.ts']
    },
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
            { test:/\.css$/, use:['style-loader','css-loader'] },
            { test: /.html$/, use: ["raw-loader"]},
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './app/index.html',
            path: path.join(__dirname,"/dist/"),
            filename: 'index.html'
        })
    ]
}