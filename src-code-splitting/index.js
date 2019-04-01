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
// function getComponent() {
//     // import() 会返回一个 promise
//     // 在注释中使用了 webpackChunkName。这样做会导致我们的 bundle 被命名为 lodash.bundle.js
//     return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//         var element = document.createElement('div');
//         element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//         return element;
//     }).catch(error => 'An error occurred while loading the component');
// }

// getComponent.then(element => {
//     document.body.appendChild(element);
// });

import _ from 'loash';
function component() {
    var element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.appendChild(br);
    element.appendChild(button);

    // Note that because a network request is involved, some indication
    // of loading would need to be shown  in a production-level site/app.
    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        var print = module.default;
        print();
    })

    return element;
}

document.body.appendChild(component());