// import { cube } from './math';

// function component() {
//     var element = document.createElement('pre');
//     element.innerHTML = [
//         'Hello Webpack',
//         '5 cubed is equal to' + cube(5)
//     ].join('\n\n');

//     return element;
// }

// document.body.appendChild(component());

// 动态导入
function getComponent() {
    // import() 会返回一个 promise
    // 在注释中使用了 webpackChunkName。这样做会导致我们的 bundle 被命名为 lodash.bundle.js
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        return element;
    }).catch(error => 'An error occurred while loading the component');
}

getComponent.then(element => {
    document.body.appendChild(element);
});