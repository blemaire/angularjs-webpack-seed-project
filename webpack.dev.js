// var webpack = require('webpack');
// var packageJson = require('./package.json');
// var path = require('path');
// const merge = require('webpack-merge');
// const common = require('./webpack.common.js');

// module.exports = merge(common, {
//     module: {
//         rules:
//         [
//             {
//                 test: /\.tsx?$/,
//                 loaders: [
//                     {
//                         loader: 'awesome-typescript-loader',
//                         options: {
//                             configFileName: 'tsconfig.json',
//                         },
//                     },
//                     'angular2-template-loader',
//                     'angular-router-loader',
//                 ],
//                 include: [
//                     path.join(process.cwd(), 'src'),
//                 ],
//             },
//         ]
//     },
//     watch:true,
//     mode: 'development'
// });

const { resolve } = require('path');
const rxPaths = require('rxjs/_esm5/path-mapping');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const { IndexHtmlWebpackPlugin } = require('@angular-devkit/build-angular/src/angular-cli-files/plugins/index-html-webpack-plugin');

module.exports = {

  mode: 'development',

  devtool: 'eval',

  entry: {
    main: './src/main.ts',
    polyfills: './src/polyfills.ts',
    styles: './src/styles.scss'
  },

  output: {
    path: resolve('./dist'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.ts', '.js'],
    alias: rxPaths()
  },

  node: false,

  performance: {
    hints: false,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: '@ngtools/webpack'
      },
      {
        test: /\.js$/,
        exclude: /(ngfactory|ngstyle).js$/,
        enforce: 'pre',
        use: 'source-map-loader'
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'to-string-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|cur)$/,
        loader: 'file-loader',
        options: {
          name: `[name].[ext]`,
          limit: 10000
        }
      },
      {
        test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
        loader: 'url-loader',
        options: {
          name: `[name].[ext]`,
          limit: 10000
        }
      },

      // This hides some deprecation warnings that Webpack throws

      {
        test: /[\/\\]@angular[\/\\]core[\/\\].+\.js$/,
        parser: { system: true },
      }
    ]
  },

  plugins: [
    new IndexHtmlWebpackPlugin({
      input: './src/index.html',
      output: 'index.html',
      entrypoints: [
        'styles',
        'polyfills',
        'main'
      ]
    }),

    new AngularCompilerPlugin({
      mainPath: resolve('./src/main.ts'),
      sourceMap: true,
      nameLazyFiles: true,
      tsConfigPath: resolve('./tsconfig.app.json'),
      skipCodeGeneration: true
    }),

    new ProgressPlugin(),

    new CircularDependencyPlugin({
      exclude: /[\\\/]node_modules[\\\/]/
    }),

    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets'
      },
      {
        from: 'src/favicon.ico'
      }
    ])
  ]
};
