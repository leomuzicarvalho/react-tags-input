const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8000/',
  },
  devServer: {
    port: 8000,
    host: '0.0.0.0',
    historyApiFallback: true,
    disableHostCheck: true
  }
});