import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __dirname = path.resolve();

const config = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: './images/[name].[hash][ext][query]',

    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js)?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({ filename: 'index.html', template: './pages/index.html' }),
    new HtmlWebpackPlugin({ filename: 'about.html', template: './pages/about.html' }),
    new HtmlWebpackPlugin({ filename: 'analytics.html', template: './pages/analytics.html' }),
    new MiniCssExtractPlugin({ filename: '[name].[hash].scss' }),
  ],
};

export default config;
