const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebPackPwaManifestPlugin = require("webpack-pwa-manifest");

module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      // ...
      "react-dom$": "react-dom/profiling",
      "scheduler/tracing": "scheduler/tracing-profiling",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new WebPackPwaManifestPlugin({
      name: "Petgram - Pet App",
      shortname: "Petgram <3",
      description: "You can find your favorite pets",
      background_color: "#fff",
      theme_color: "#fb8122",
      icons: [
        {
          src: path.resolve("src/assets/icon-luis-olivarez.png"),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist/"),
    },
    compress: true,
    port: 3000,
    open: true,
  },
};
