const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')



module.exports = {
  entry: './src/components/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],

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

  ],
}