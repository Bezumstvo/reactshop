var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
//        path: path.resolve('dist'),
        path: __dirname + "/dist/js",
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-3']
                  }
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
              }, {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ico|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000' }]

    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        inject: 'body'
    }),
      new HtmlWebpackPlugin({
          title: 'HtmlWebpackPlugin example',
          favicon: './public/favicon.ico',
          filename: 'favicon.ico'
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
