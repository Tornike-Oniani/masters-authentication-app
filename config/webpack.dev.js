const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:3003/',
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3003,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '../public'),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'authentication',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthenticationApp': './src/bootstrap',
      },
      shared: ['react', 'react-dom', 'miragejs'],
    }),
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
