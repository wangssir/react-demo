const { merge } = require('webpack-merge')
const path = require('path')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    open: true,
    contentBase: path.join(__dirname, './dist'),
    // historyApiFallback: true, //不跳转
    overlay: true, // 浏览器页面上显示错误
    historyApiFallback: {
      rewrites: [
        { from: /^(.*)page1(.*)$/, to: '/page1/index.html'},
        { from: /^(.*)page2(.*)$/, to: '/page2/index.html'},
        { from: /^(.*)page12(.*)$/, to: '/page12/index.html'},
        // { from: /^\/page13\/.*$/, to: '/page13/index.html'},
        // 全都没有匹配到的时候，跳转到默认配置
        { from: /.*/, to: '/404.html' }
      ],
    },
    inline: true, //实时刷新
    hot: true, // 开启热更新,
    port: 8000, 
  }
})
