const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  //   publicPath: 'http://localhost:8002/'
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: 'auth',
    //   filename: 'remoteEntry.js',
    //   exposes: {
    //     './AuthApp': './src/bootstrap',
    //   },
    //   shared: packageJson.dependencies,
    // }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ],
};

module.exports = merge(commonConfig, prodConfig);