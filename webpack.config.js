const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// Removed incompatible webpack-md5-hash plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
// const isDev = process.env.NODE_ENV === "development";

new webpack.DefinePlugin({
  NODE_ENV: JSON.stringify(process.env.NODE_ENV),
});

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "scripts/[name].[chunkhash].js",
    publicPath: '/',
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    open: true,
  },

  optimization: {
    minimize: true,
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["mozjpeg", { quality: 75 }],
              ["pngquant", { quality: [0.65, 0.90], speed: 4 }],
              ["svgo", { plugins: [{ removeViewBox: false }] }],
            ],
          },
        },
      }),
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
      // {
      //   test: /\.css$/,
      //   use: [
      //     isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      //     "css-loader",
      //     "postcss-loader"
      //   ]
      // },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/',
            },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./images/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "fonts/",
          publicPath: "/fonts/",
        },
      },
    ],
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
    // new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
  ],
};
