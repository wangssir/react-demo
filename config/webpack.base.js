const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const { setEntry, setHtmlPlugin } = require('./webpack.util')

module.exports = {
  entry: setEntry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]/index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {test:/\.css$/,use:[ MiniCssExtractPlugin.loader,'css-loader']},
      {
        test: /\.less$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader',
          'less-loader'
        ]
      },
      
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },
  plugins: [
    ...setHtmlPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]/index.css',
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
}
