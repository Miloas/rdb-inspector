const path = require('path')
const webpack = require('webpack')

module.exports = (env) => {
  return {
    devtool: 'inline-source-map',
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index.tsx'
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'chrome/dist'),
      publicPath: '/'
    },
    devServer: {
      hot: true,
      contentBase: path.resolve(__dirname, 'chrome/dist'),
      publicPath: '/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./config/manifest.json'),
      })
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            'react-hot-loader/webpack',
            'awesome-typescript-loader'
          ],
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
          ]
        }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    }
  }
}
