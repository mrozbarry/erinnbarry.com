const path = require("path")
const base = require("./webpack.base.js")
const Webpack = require("webpack")

module.exports = {
  devtool: "cheap-module-eval-source-map",

  entry: base.entry,
  output: base.output,
  resolve: base.resolve,
  module: base.module,

  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoEmitOnErrorsPlugin()
  ],

  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    inline: true,
    publicPath: "/",
    hot: true
  }
}
