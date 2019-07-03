// Webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src'),
};
module.exports = {
  entry: path.join(paths.SRC, 'index.jsx'),
  output: {
    path: paths.DIST,
    publicPath: '', // прописыывает пути к файлам
    filename: 'bundle.js'
  },
  resolve: {
      extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
              presets: ['react', 'es2015', 'stage-3']
            }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader' //, publicPath: '' // publicPath прошишит пути к шрифтам
        }),
      },
      {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
                    use: [

                "css-loader", // translates CSS into CommonJS
          ]
          }),
        },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|otf|ico|ttf|svg|webm)$/,
        use: [
          'file-loader',
        ],
      },
    ],
},

  plugins: [
    new ExtractTextPlugin({
     filename: 'style.css'
 }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body'
  }),
    ],
  devServer: {
      historyApiFallback: true
  },
  externals: {
      // global app config object
      config: JSON.stringify({
          apiUrl: 'http://127.0.0.1:4000'
      })
  }
}
