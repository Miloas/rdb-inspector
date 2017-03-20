const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = (env) => {
  return {
    devtool: 'source-map',
    entry: [
      './src/index.tsx'
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'chrome/dist'),
      publicPath: '/'
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        options: {
          context: __dirname
        }
      }),
      new ParallelUglifyPlugin({
        cacheDir: path.resolve(__dirname, './webpack-cache'),
        uglifyJS: {
          beautify: false,
          comments: false
        }
      })
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            'ts-loader'
          ],
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[local]_[hash:base64:5]'
              }
            },
            'postcss-loader',
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    }
  }
}
