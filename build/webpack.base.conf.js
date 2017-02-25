const path = require('path');
var webpack = require('webpack')
const config = require('../config');
const utils = require('./utils');
const projectRoot = path.resolve(__dirname, '../');
console.log('projectRoot', projectRoot);

const env = process.env.NODE_ENV;
// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
const cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap);
const cssSourceMapProd = (env === 'production' && config.build.productionSourceMap);
const useCssSourceMap = cssSourceMapDev || cssSourceMapProd;

module.exports = {
  entry: {
    app: './src/main.js',
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      prutt: 'pruttipruttttt',
      src: path.resolve(__dirname, '../src'),
      assets: path.resolve(__dirname, '../src/assets'),
      components: path.resolve(__dirname, '../src/components'),
    },
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')],
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'hmr-auto-accept-loader?fileEnding=-store.js|-substore.js!eslint',
        include: projectRoot,
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
  plugins: [
    new (require('webpack/lib/ContextReplacementPlugin'))(
      /webpack-context-vuex-hmr$/,           // [leave me] this file
      path.resolve(process.cwd(), './src'),  // [edit me]  context root path
      true,                                  // [edit me]  recursive search
      /-store.js|-substore.js$/              // [edit me]  regexp to find modules
    ),
    new webpack.ProvidePlugin({
      Promise: 'es6-promise-promise'
    })
  ],
  eslint: {
    formatter: require('eslint-friendly-formatter'),
  },
  vue: {
    loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions'],
      }),
    ],
  },
};