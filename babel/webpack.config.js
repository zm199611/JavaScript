const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');

const config = {
    entry: './src/index.js',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer:{
        contentBase:'./public',
        hot:true
    },
    module: {
      rules: [
        {
          test: /(.js|.jsx)$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template:'./public/index.html',
        filenamw:'index.html'
      }),
      new BundleAnalyzerPlugin(),
      new CopyPlugin({
        patterns: [
          { from: '../public/ip6x2.png', to: './' },
        ],
      }),
  
    ]
  }
  module.exports = config
  
  //dist 存着的是最终打包的结果