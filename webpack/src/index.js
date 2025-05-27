import { cube } from './math.js';
import './style/color.less'
import './style/global.less'



const div = document.createElement('div')
div.textContent  = '我是div'
document.body.appendChild(div)
console.log(cube(5));