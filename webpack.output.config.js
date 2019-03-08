const path = require('path');
/** 
 * 虽然在 dist/ 文件夹我们已经有 index.html 这个文件，
 * 然而 HtmlWebpackPlugin 还是会默认生成 index.html 文件。
 * 这就是说，它会用新生成的 index.html 文件，把我们的原来的替换
*/
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动添加 bundle 到 html 中
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 在每次构建前清理 /dist 文件夹

// current src-output
module.exports = {
    entry: {
        app: './src-output/index.js',
        print: './src-output/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        /**
         * With zero configuration,
         *   clean-webpack-plugin will remove files inside the directory below
         */
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ]
};