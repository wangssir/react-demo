const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const { setEntry, setHtmlPlugin } = require('./webpack.util')
const HappyPack = require('happypack');
const os = require('os'); // node 提供的系统操作模块

const extractTextPlugin = require('extract-text-webpack-plugin');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
  entry: setEntry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]/index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      // {test:/\.css$/,use:[ MiniCssExtractPlugin.loader,'css-loader']},
      {
        test: /\.less$/, 
        use:
      // process.env.NODE_ENV === 'development' ?
         [
            // 'style-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            {
              loader: 'less-loader',
              options: {
                modifyVars: {
                  'ant-prefix': 'mcantd4',
                  'iconfont-css-prefix': 'mcanticon4',
                },
                javascriptEnabled: true,
              },
            },
          ]
        // : extractTextPlugin.extract({
        //     // fallback:MiniCssExtractPlugin.loader,
        //     fallback: 'style-loader',
        //     use: 'happypack/loader?id=lessHappy',
        //     // css中的基础路径
        //     publicPath: '../',
        //   }),
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
    }),
    new HappyPack({
      // 基础参数设置
      id: 'lessHappy', // 上面loader?后面指定的id
      loaders: [
        'css-loader',
        'postcss-loader',
        {
          // loader: 'less-loader',
          loader: MiniCssExtractPlugin.loader,

          options: {
            modifyVars: {
              'ant-prefix': 'mcantd4',
              'iconfont-css-prefix': 'mcanticon4',
            },
            javascriptEnabled: true,
          },
        },
      ], // 实际匹配处理的loader
      threadPool: happyThreadPool,
      // cache: true // 已被弃用
      verbose: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
}
