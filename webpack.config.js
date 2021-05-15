const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const isProduction = process.env.NODE_ENV !== 'production';

const wpConfig = {
  mode: process.env.NODE_ENV,

  entry: {
    index: './src/index.js',
    print: './src/modules/print.js',
  },

  output: {
    publicPath: '', // For IE: if not Define throws an Error: Automatic publicPath is now supported in this browser
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
          // see .babelrc
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,

          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          
          'postcss-loader',

          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sourceMap: true,
              sassOptions: {
                fiber: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },

      // Built-in loaders
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test Webpack 5',
      template: './src/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'subpages.html',
      title: 'Test Subpages Webpack 5',
      template: './src/subpages/index.html',
      chunks: ['print']
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'bundle.css',
      chunkFilename: 'bundle.css',
    })
  ]
};

if (!isProduction) {
  wpConfig
  wpConfig.mode = 'development',
  wpConfig.devtool = 'inline-source-map',
  wpConfig.devServer = {
    contentBase: './dist',
  }
}




module.exports = wpConfig;