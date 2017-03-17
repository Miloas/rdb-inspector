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
            'css-loader?modules',
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
