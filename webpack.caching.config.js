const path = require('path');
const webpack = require('webpack');
/** 
 * 虽然在 dist/ 文件夹我们已经有 index.html 这个文件，
 * 然而 HtmlWebpackPlugin 还是会默认生成 index.html 文件。
 * 这就是说，它会用新生成的 index.html 文件，把我们的原来的替换
*/
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动添加 bundle 到 html 中
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 在每次构建前清理 /dist 文件夹

/** 
 * CommonsChunkPlugin 能够在每次构建后的结果中，
 * 将 webpack 样板(boilerplate) 和 manifest 提取出来,
 * 通过指定 entry 中未用到的名称，此插件会自动将我们需要的内容提取到单独的包中
*/

// current src-output
module.exports = {
    entry: './src-caching/index.js',
    output: {
        filename: '[name].[chunkhash].js',
        /**
         * With zero configuration,
         *   clean-webpack-plugin will remove files inside the directory below
         */
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        runtimeChunk: {
            // 提取模板
            name: 'manifest'
        },
        splitChunks: {
            cacheGroups: { // 缓存 chunks
                vendor: { // key 为 entry 中定义的入口名称(entry 里不定义也可以)
                    name: "vendor", // 要缓存的 分隔出来的 chunk 名称
                    test: /lodash/, // 正则规则验证，如果符合就提取 chunk
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Caching'
        }),
        new webpack.HashedModuleIdsPlugin(), // 不管再添加任何新的本地依赖，对于每次构建，vendor hash 都应该保持一致
    ]
};

/** 
 * main bundle 会随着自身的新增内容的修改，而发生变化。
 * vendor bundle 会随着自身的 module.id 的修改，而发生变化。
 * manifest bundle 会因为当前包含一个新模块的引用，而发生变化。
 * 第一个和最后一个都是符合预期的行为 -- 而 vendor 的 hash 发生变化是我们要修复的。
 * 幸运的是，可以使用两个插件来解决这个问题。第一个插件是 NamedModulesPlugin，将使用模块的路径，而不是数字标识符。
 * 虽然此插件有助于在开发过程中输出结果的可读性，然而执行时间会长一些。
 * 第二个选择是使用 HashedModuleIdsPlugin，推荐用于生产环境构建
*/