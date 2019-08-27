var HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        polyfills: "./src/polyfills.ts",
        // vendor: Object.keys(packageJson.dependencies),
        app: "./src/main.ts"
    },
    output: {
        path: path.join(__dirname, "/dist/"),
        filename: "[name].bundle.js",
        publicPath: '/',
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist/"),
        port:9000
    },
    resolve: {
		  extensions: ['.js', '.ts']
    },
    module: {
        rules:
        [
            {
              test: /\.s[ac]ss$/i,
              use: [
                'to-string-loader',
                'css-loader',
                'sass-loader',
              ],
            },
            { test:/\.css$/, use:['style-loader','css-loader'] },
            { test: /.html$/, use: ["html-loader"]},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            hash: true,
            template: 'src/index.tpl.html',
            path: path.join(__dirname, "/dist/"),
            showErrors: true,
        }),
    ]
}
