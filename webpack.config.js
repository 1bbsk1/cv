const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin"); // [NOTE] Disabled for vanilla JS/static HTML. Will be re-enabled for React+TypeScript migration.
const isDev = process.env.NODE_ENV === "development";
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "scripts/[name].[contenthash].js",
    publicPath: '',
  },

  devServer: {
    open: true,
    port: 3000,
  },

  optimization: {
    minimize: true,
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
      // new ImageMinimizerPlugin({
      //   minimizer: {
      //     implementation: ImageMinimizerPlugin.imageminGenerate,
      //     options: {
      //       plugins: [
      //         ["gifsicle", { interlaced: true }],
      //         ["mozjpeg", { quality: 75 }],
      //         ["pngquant", { quality: [0.65, 0.90], speed: 4 }],
      //         ["svgo", { plugins: [{ removeViewBox: false }] }],
      //       ],
      //     },
      //   },
      // }), // [NOTE] Disabled for vanilla JS/static HTML. Will be re-enabled for React+TypeScript migration.
    ],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          isDev ? "style-loader" : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },

  resolve: {
    extensions: [".js", ".json"],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['main'],
      template: "./src/index.html",
      filename: "index.html",
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/assets/images", to: "assets/images" }
      ],
    }),
    // new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
  ],
};
