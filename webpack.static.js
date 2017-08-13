const base = require("./webpack.base.js")
const Webpack = require("webpack")

module.exports = {
  entry: base.entry,
  output: base.output,
  resolve: base.resolve,
  module: base.module,

	plugins: [
		new Webpack.LoaderOptionsPlugin({ minimize: true, debug: false })
	]
}
