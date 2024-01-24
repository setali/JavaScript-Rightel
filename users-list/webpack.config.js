const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [new MiniCssExtractPlugin()],
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // file.css file.CSS
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i, // .scss .sass
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|gif|jpe?g)/,
        type: 'asset/resource'
      }
    ]
  }
}
