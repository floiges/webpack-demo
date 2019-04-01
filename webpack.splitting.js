const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// module.exports = {
//     entry: {
//         /** 
//          * 如果入口 chunks 之间包含重复的模块，那些重复模块都会被引入到各个 bundle 中。
//          * 这种方法不够灵活，并且不能将核心应用程序逻辑进行动态拆分代码。
//         */
//         index: './src-code-splitting/index.js',
//         another: './src-code-splitting/another-module.js'
//     },
//     plugins: [
//         new HTMLWebpackPlugin({
//             title: 'Code Splitting'
//         }),
//         /** 
//          * CommonsChunkPlugin 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk
//         */
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'common', // 指定公共 bundle 的名称
//         })
//     ],
//     output: {
//         filename: '[name].bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     }
// };

// 动态导入
module.exports = {
    entry: {
        /** 
         * 如果入口 chunks 之间包含重复的模块，那些重复模块都会被引入到各个 bundle 中。
         * 这种方法不够灵活，并且不能将核心应用程序逻辑进行动态拆分代码。
        */
        index: './src-code-splitting/index.js',
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Code Splitting'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js', // 决定非入口 chunk 的名称
        path: path.resolve(__dirname, 'dist')
    }
};