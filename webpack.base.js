const path = require("path")

const ROOT_PATH = path.resolve(__dirname)

module.exports = {
  entry: {
    index: path.resolve(ROOT_PATH, "src", "index.js")
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(ROOT_PATH, "src"),
        loader: "babel-loader"
      },

      {
        test: /\.styl$/,
        include: path.resolve(ROOT_PATH, "src"),
        loader: "style-loader!css-loader!stylus-loader"
      },

      {
        test: /\.yaml$/,
        loader: "json-loader!yaml-loader"
      },

      {
        test: /\.md$/,
        use: [
          { loader: "html-loader" },
          {
            loader: "markdown-loader",
            options: {
              pedantic: true
            }
          }
        ]
      }
    ]
  },

  output: {
    path: path.resolve(ROOT_PATH, "public"),
    publicPath: "/",
    filename: "[name].js"
  },

  resolve: {
    extensions: [".js", ".styl"],
    modules: [
      path.resolve(ROOT_PATH, "src"),
      path.resolve(ROOT_PATH, "node_modules")
    ]
  }
}
