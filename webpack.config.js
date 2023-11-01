const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require ('terser-webpack-plugin')
const {cleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
  entry: './src/components/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
     '@components': path.resolve(__dirname, 'src/components/')
    }
  },
  mode:'production',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test:/\.(s*)css$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|gif|jpg)$/,
        use:[
          {
            'loader': 'file-loader',
            options:{
              name:'assets/[hash].[ext]'
            }
          }
        ] 
      }
    ],
  },
  devServer:{
    
    historyApiFallback:true,

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[hame].css'
    }),

    new cleanWebpackPlugin(),
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ]

  }
}