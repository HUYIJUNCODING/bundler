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
export default {
    square,
    cube
}