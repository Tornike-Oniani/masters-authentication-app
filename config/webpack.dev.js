const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8083,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '../public'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      publicPath: 'auto',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);

/*
    new ModuleFederationPlugin({
      name: 'management',
      filename: 'remoteEntry.js',
      exposes: {
        './ManagementApp': './src/bootstrap',
      },
      shared: ['react', 'react-dom'],
    }),
    */
