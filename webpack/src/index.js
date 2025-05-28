import { cube } from './math.js';
import './style/color.less'
import './style/global.less'
import "./do.js"




const div = document.createElement('div')
div.textContent = '我是div'
document.body.appendChild(div)
console.log(cube(5));
const button = document.createElement('button')
button.textContent = '点我动态加载'
button.addEventListener('click', () => {
    console.log(123)
    import(/* webpackChunkName: "chunk-calc" */ './calc.js')
})
document.body.appendChild(button)