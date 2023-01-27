import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import Swiper from 'swiper';

const __dirname = path.resolve();

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: true,
    port: 3000,
    open: true,
  },
  entry: {
    index: './pages/main/index.js',
    about: './pages/about/about.js',
    analytics: './pages/analytics/analytics.js',
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
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './pages/main/index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './pages/about/about.html',
      chunks: ['about'],
    }),
    new HtmlWebpackPlugin({
      filename: 'analytics.html',
      template: './pages/analytics/analytics.html',
      chunks: ['analytics'],
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

export default config;
