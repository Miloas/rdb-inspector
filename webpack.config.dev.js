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
      new webpack.HotModuleReplacementPlugin()
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
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        actions: path.resolve(__dirname, 'src/actions/'),
        config: path.resolve(__dirname, 'src/config'),
        db: path.resolve(__dirname, 'src/db/'),
        epics: path.resolve(__dirname, 'src/epics/'),
        reducers: path.resolve(__dirname, 'src/reducers/'),
        utils: path.resolve(__dirname, 'src/utils/')
      }
    }
  }
}
