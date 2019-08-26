var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var packageJson = require('./package.json');
var path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ngc = require('@ngtools/webpack');

var path = require('path');
var _root = path.resolve(__dirname, '..');
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}

module.exports = merge(common, {
    entry: {
        "vendor-aot": "./angular/src/vendor.aot",
    },
    module: {
        rules:
        [
            {
                test: /\.ts$/,
                loader: '@ngtools/webpack'
            },
        ]
    },
    mode: 'production',
    plugins: [
        new webpack.NormalModuleReplacementPlugin(
            /bootstrap\.js/,
            'bootstrap.aot.js'
        ),
        new ngc.AngularCompilerPlugin({
            tsConfigPath: './angular/tsconfig.aot.json',
            entryModule: root('angular/src/helpers/angular-root.module#AngularRootModule'),
        }),
    ]
});
