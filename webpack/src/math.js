import _ from 'lodash'
import "./do.js"

function getString(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('str:' + x)
        }, 2000)
    })
}

export function square(x) {
    return x * x;
}

export const cube = async (x) => {
    await getString(x)
    return x * x * x;
}

export function arr2str() {
    return _.join(['h', 'e', 'l', 'l', 'o'])
}

export default {
    square,
    cube
}