import _ from 'lodash';
//1.添加代码一
import './style.css';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //2.添加代码二
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());