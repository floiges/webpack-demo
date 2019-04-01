const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

/** 
 * 当使用 webpack dev server 和 Node.js API 时，
 * 不要将 dev server 选项放在 webpack 配置对象(webpack config object)中。
 * 而是，在创建选项时，将其作为第二个参数传递
*/
const config = require('./webpack.hmr.config');
const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
    console.log('dev server listening on port 5000');
});