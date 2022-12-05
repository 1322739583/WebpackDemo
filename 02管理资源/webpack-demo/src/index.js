import _ from 'lodash';
import './style.css';
//1.添加代码一
import Icon from './webpack.svg';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    element.classList.add('hello');

    //2.添加代码二
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data)
    console.log(Notes)

    return element;
}

document.body.appendChild(component());