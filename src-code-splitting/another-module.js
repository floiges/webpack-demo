/** 
 *  代码分离的三种方式：
 *  入口起点：使用 entry 配置手动地分离代码。
 *  防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。
 *  动态导入：通过模块的内联函数调用来分离代码。
*/

import _ from 'lodash';

console.log(_.join(['Another', 'module', 'loaded!'], ' '));