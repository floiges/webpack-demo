/** 
 * webpack-dev-middleware 是一个容器,可以把 webpack 处理后的文件传递给服务器
 * webpack-dev-server 在内部就是使用了它
*/


const express = require('express');
const webpack = require('webpack');
const webpackDevMiddlware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.development.config');
const complier = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.development.config.js
// configuration file as a base.
app.use(webpackDevMiddlware(complier, {
    publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
app.listen(3000, () => {
    console.log('Example app listening on port 3000!\n');
});