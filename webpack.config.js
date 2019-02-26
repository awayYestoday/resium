"use strict";

const path = require("path");

const sourcePath = path.join(__dirname, './src');
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlIncludeAssetsPlugin = require("html-webpack-include-assets-plugin");

module.exports = (env, args) => {
  const prod = args.mode === "production";
  return {
    context: __dirname,
    devServer: {
      hot: true,
      port: 3000,
      contentBase: sourcePath,
      historyApiFallback: {
        disableDotRule: true,
      },
    },
    devtool: !prod ? void 0 : "eval-source-map",
    entry: "./src/index.js",
    externals: {
      cesium: "Cesium",
    },
    mode: prod ? "production" : "development",
    module: {
      rules: [
        {
          test: [/\.js$/, /\.jsx$/],
          use: ['babel-loader?cacheDirectory=true'],
          exclude: /node_modules/,
          include: path.resolve(__dirname, 'src'),
        },
        { test: /\.html$/, use: 'html-loader' },
        {
          test: /\.css$/,
          use: [
          'style-loader',
          'css-loader'
          ]
        },
        {
          test: /\.less$/,
          use: [{
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
            },
          }, {
            loader: 'less-loader',
            options: {
              minimize: true,
              sourceMap: true,
            },
          }],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
          'file-loader'
          ]
        },
        { test: /.(woff|woff2|eot|otf|ttf)$/, loader: 'file-loader' },
      ],
    },
    output: {
      path: path.join(__dirname, "build"),
      publicPath: '/',
    },
    plugins: [
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("/cesium"),
      }),
      new CopyPlugin([
        {
          from: `./node_modules/cesium/Build/Cesium${prod ? "" : "Unminified"}`,
          to: "cesium",
        },
      ]),
      new HtmlPlugin({
        template: "index.html",
      }),
      new HtmlIncludeAssetsPlugin({
        append: false,
        assets: ["cesium/Widgets/widgets.css", "cesium/Cesium.js"],
      }),
      ...(prod ? [] : [new webpack.HotModuleReplacementPlugin()]),
    ],
  };
};
