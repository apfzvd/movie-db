const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cssNano = require('cssnano')
const stylysPostCSS = [cssNano({ preset: 'default' })]

module.exports = {
  entry: {
    boilerplate: [
      path.resolve(__dirname, '../src'),
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css/,
        sideEffects: true,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /.*\.(gif|svg|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.styl$/,
        include: [path.resolve(__dirname, '../src')],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]',
              },
              importLoaders: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: stylysPostCSS,
              },
            },
          },
          'stylus-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
}
