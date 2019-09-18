const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      'index.html',
      {
        from: process.env.XBSJ_IMPORT !== 'external' ? './node_modules/earthsdk/dist/XbsjCesium' : 'Static/XbsjCesium',
        to: 'XbsjCesium',
        toType: 'dir'
      },
      {
        from: process.env.XBSJ_IMPORT !== 'external' ? './node_modules/earthsdk/dist/XbsjEarth' : 'Static/XbsjEarth',
        to: 'XbsjEarth',
        toType: 'dir'
      },
    ]),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../../dist')
  }
};