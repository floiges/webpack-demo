const path = require('path');
/** 
 * 虽然在 dist/ 文件夹我们已经有 index.html 这个文件，
 * 然而 HtmlWebpackPlugin 还是会默认生成 index.html 文件。
 * 这就是说，它会用新生成的 index.html 文件，把我们的原来的替换
*/
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动添加 bundle 到 html 中
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 在每次构建前清理 /dist 文件夹
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src-hmr/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        /**
         * With zero configuration,
         *   clean-webpack-plugin will remove files inside the directory below
         */
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    // 在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件
    devServer: {
        contentBase: './dist',
        hot: true // hmr
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // 借助于 style-loader 的帮助，CSS 的模块热替换实际上是相当简单的。
                // 当更新 CSS 依赖模块时，此 loader 在后台使用 module.hot.accept 来修补(patch) <style> 标签
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.NamedModulesPlugin(), // 查看要修补(patch)的依赖
        new webpack.HotModuleReplacementPlugin() // hmr
    ]
};