module.exports = {
  entry: "./src/main.js",
  module: {
    rules: [
      {
        test: /\.css$/, // 规则使用正则表达式
        use: ["style-loader", "css-loader"] // 注意: 编写顺序(webpack解析顺序：从下往上, 从右往做, 从后往前)
      }
    ]
  }
}
