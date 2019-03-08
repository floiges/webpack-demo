import _ from 'lodash';
import './style.css'; // 当该模块运行时，含有 CSS 字符串的 <style> 标签，将被插入到 html 文件的 <head> 中
import Icon from './icon.png'; // 图像将被处理并添加到 output 目录
import Data from './data.xml'; // Data 变量将包含可直接使用的已解析 JSON

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);

    return element;
}

document.body.appendChild(component());