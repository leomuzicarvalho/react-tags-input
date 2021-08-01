const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss'],
    alias: {
      '@': path.join(__dirname, '..', 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ]
}