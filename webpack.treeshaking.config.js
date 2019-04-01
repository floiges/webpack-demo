const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动添加 bundle 到 html 中
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 在每次构建前清理 /dist 文件夹

module.exports = {
    entry: './src-tree-shaking/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    mode: 'production'
}; 