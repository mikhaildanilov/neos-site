const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './src'),
    watchContentBase: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080
  },
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/solutions.html'),
      filename: 'solutions.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/xsm-mux.html'),
      filename: 'xsm-mux.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/about.html'),
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/anchor-isbd.html'),
      filename: 'anchor-isbd.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/anchor-pd.html'),
      filename: 'anchor-pd.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/anchor-tf.html'),
      filename: 'anchor-tf.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/certificates.html'),
      filename: 'certificates.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/contacts.html'),
      filename: 'contacts.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/converter-sorm-for-fix.html'),
      filename: 'converter-sorm-for-fix.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/converter-sorm-for-mobile.html'),
      filename: 'converter-sorm-for-mobile.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/converter-sorm-for-trunk.html'),
      filename: 'converter-sorm-for-trunk.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/dealers.html'),
      filename: 'dealers.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/decree.html'),
      filename: 'decree.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/geo-sms-system.html'),
      filename: 'geo-sms-system.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/introducing.html'),
      filename: 'introducing.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/leasing.html'),
      filename: 'leasing.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/mercury-system.html'),
      filename: 'mercury-system.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/order.html'),
      filename: 'order.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/passive-sorm-for-fix.html'),
      filename: 'passive-sorm-for-fix.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/passive-sorm-for-mobile.html'),
      filename: 'passive-sorm-for-mobile.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/sorm-ims-for-fix.html'),
      filename: 'sorm-ims-for-fix.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/sorm-ims-for-mobile.html'),
      filename: 'sorm-ims-for-mobile.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/support.html'),
      filename: 'support.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/terms.html'),
      filename: 'terms.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/xsm-mux-70-268.html'),
      filename: 'xsm-mux-70-268.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/xsm-mux-86.html'),
      filename: 'xsm-mux-86.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/xsm-mux-139.html'),
      filename: 'xsm-mux-139.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/xsm-mux-645.html'),
      filename: 'xsm-mux-645.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/yarovaya.html'),
      filename: 'yarovaya.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline'
      },
      {
        test: /\.(sass|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  }
};
