
// map 
const map = (array, fn) => {
    let arr = [];
    for (const value of array) {
        arr.push(fn(value));
    }
    return arr
}

// let arr = [123,23,51,2,451,52,512]
// arr = map(arr, val=>val*val)
// console.log(arr)

// every
const every = (array, fn) => {
    let onOff = true;
    for (const value of array) {
        onOff = fn(value)
        if (!onOff) {
            break
        }
    }
    return onOff
}

// let arr = [312,11,41,21,11,11]
// let r = every(arr, v=>v>10)
// console.log(r)

// some
const some = (array, fn)=>{
    let onOff = false
    for (const value of array) {
        result = fn(value)
        if (result) {
            break
        }
    }
    return result
}
// let arr = [312,11,11,21,11,11]
// let r = some(arr, v=>v<10)
// console.log(r)