function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        fn(array[i])
    }
}

// 测试
// let arr = [2,41,23,541,2,5415,2];
// forEach(arr, function(item){
//     console.log(item)
// })

// filter
function filter(array, fn) {
    let results = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (fn(element)) {
            results.push(element)
        }
    };
    return results
}

let arr = [2,41,23,541,2,5415,2];
arr = filter(arr, function(item){
    return item % 2 === 0
})
// console.log(arr)

// 函数作为返回值
function makeFn(params) {
    let msg = 'function'
    return function (params) {
        console.log(msg)
    }
}

const fn = makeFn()
// fn()
// makeFn()()


// once
function once (fn) {
    let onOff = false;
    return function () {
        if (!onOff) {
            onOff = true;
            fn.apply(this, arguments)
        }
    }
};

let pay = once(function(money){
    console.log(money)
})

pay(`12`)
pay(`12`)
pay(`12`)
pay(`12`)
pay(`12`)