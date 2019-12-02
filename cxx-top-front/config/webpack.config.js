const ip = require('ip')
const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const ReactManiFest = require('./reactFest.json')

const env = process.env.NODE_ENV
const cfg = require('./config.js')

const prod = env === 'production'

module.exports = {
  // 仅错误输出
  stats: 'errors-only',
  target: 'web',
  mode: prod ? 'production' : 'development',
  entry: {
    app: ['./client/client.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '../asset'),
    filename: 'script/[name].js',
    chunkFilename: 'script/[name].[chunkhash:5].js',
    publicPath: '/asset/',
  },
  devServer: {
    overlay: {
      errors: true,
      warnings: false,
    },
    open: true,
    https: false,
    hotOnly: true,
    inline: true,
    port: cfg.port,
    compress: true,
    progress: true,
    publicPath: '/asset/',
    openPage: 'index.html',
    host: ip.address(),
    disableHostCheck: true,
    historyApiFallback: true,
    contentBase: './',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      node: 'current',
                      browsers: [
                        'last 2 versions',
                        'ie >= 10',
                      ],
                    },
                  },
                ],
                '@babel/preset-react',
              ],
              plugins: [
                '@babel/plugin-proposal-function-bind',
                '@babel/plugin-proposal-optional-chaining',
                '@babel/plugin-transform-runtime',
              ],
            },
          },
        ],
      }, {
        test: /\.(sc|sa)ss$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader?importLoaders=1',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer({
                overrideBrowserslist: ['> 1%', 'last 2 versions'],
              })],
            },
          }, {
            loader: 'sass-loader',
          },
        ],
      }, {
        test: /\.css$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader?importLoaders=1',
            options: {
              sourceMap: true,
            },
          },
        ],
      }, {
        test: /\.(png|jpg|gif|md)$/,
        use: ['file-loader?limit=8192&name=image/[md5:hash:base64:10].[ext]'],
      },
    ],
  },
  devtool: !prod ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.jpg', '.jpeg', '.png', '.gif', '.svg'],
    alias: {
      client: path.resolve(__dirname, '../client'),
      page: path.resolve(__dirname, '../client/page'),
      component: path.resolve(__dirname, '../client/component'),
      container: path.resolve(__dirname, '../client/container'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: ReactManiFest,
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: { inline: false },
        },
      }),
    ],
    noEmitOnErrors: prod,
  },
}
