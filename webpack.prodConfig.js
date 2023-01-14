import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = path.resolve();

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './index.js',
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
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
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
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
};

export default config;
