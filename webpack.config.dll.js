const webpack = require('webpack');
const path = require('path')

module.exports = {
  entry: {
    vendor: ['antd', 'react', 'react-dom', 'react-redux', 'redux', 'redux-observable', 'rxjs', 'tslib']
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'chrome/dist'),
    filename: '[name].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      path: './config/manifest.json',
      name: '[name]'
    })
  ]
}
