const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const PurgeCssWebpackPlugin = require('purgecss-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const DEVELOPMENT = 'development';
const NODE_ENV = process.env.NODE_ENV || DEVELOPMENT;
const __DEV__ = NODE_ENV === DEVELOPMENT;

const config = {
  mode: NODE_ENV,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    // publicPath: __DEV__ ? '' : '',
    filename: __DEV__ ? '[name].js' : 'js/[name].[contenthash:8].js',
    chunkFilename: __DEV__ ? '[name].js' : 'js/[name].[contenthash:8].js',
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              modules: __DEV__ ? { localIdentName: '[path]__[local]' } : true,
            },
          }
        ],
      },
      {
        test: /.css$/,
        include: /node_modules/,
        use: [
          {
            loader: __DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          }
        ],
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpe?g|png)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              name: 'images/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new HtmlWebpackPlugin(),
  ],
};

if (__DEV__) {
  config.devtool = 'eval-cheap-module-source-map';
  config.plugins.push(new ReactRefreshWebpackPlugin());
  config.devServer = {
    port: 8888,
    stats: 'errors-only',
    overlay: true,
    host: '0.0.0.0',
    historyApiFallback: true,
    disableHostCheck: true,
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changeOrigin: true,
    //   },
    // },
  };
} else {
  config.stats = 'none';
  config.plugins.push(
    new CleanWebpackPlugin(),
    new webpack.ids.HashedModuleIdsPlugin(),
    new ScriptExtHtmlWebpackPlugin({
      inline: [/runtime\.[a-z\d]{8}\.js$/],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new OptimizeCssAssetsWebpackPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
    }),
    new PurgeCssWebpackPlugin({
      paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),
    }),
  );
  config.optimization = {
    runtimeChunk: { name: 'runtime' },
    splitChunks: {
      cacheGroups: {
        commons: {
          priority: 0,
          name: 'commons',
          chunks: 'async',
          minChunks: 2,
          reuseExistingChunk: true,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'vendors',
          priority: 10,
          enforce: true,
        },
      },
    },
    minimizer: [new UglifyJsWebpackPlugin()],
  };
}

module.exports = config;
