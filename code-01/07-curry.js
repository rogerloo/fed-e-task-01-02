// function checkAge(age) {
//     let min = 22
//     return age > min
// }

// function checkAge(min, age) {
//     return age > min
// }
// console.log(checkAge(18, 20))
// console.log(checkAge(18, 22))
// console.log(checkAge(18, 25))

// let checkAge = min => (age => age >= min);

const _ = require('lodash')

function getSum(a, b, c) {
    return a + b + c
}

// const curried = _.curry(getSum)

// console.log(curried(1,2,3))
// console.log(curried(1)(2, 3))
// console.log(curried(1, 2)(3))
// console.log(curried(1)(2)(3))

// 柯里化案例

// function match(reg, str) {
//     return str.match(reg)
// }

const match = _.curry(function (reg, str) {
    return str.match(reg)
})

const haveSpace = match(/\s+/g)
const haveNum = match(/\d+/g)

// console.log(haveSpace('roger'))
// console.log(haveNum('roger0'))

const filter = _.curry(function (fn, array) {
    return array.filter(fn)
})

// console.log(filter(haveSpace, ['roger', 'xiao ling']))

const findSpace = filter(haveSpace)
// console.log(findSpace(['roger', 'xiao ling']))


// 柯里化原理模拟

function curry(fn) {
    return function curriedFn(...args) {
        // 判断实参和形参的个数 
        if (args.length < fn.length) {
            return function () {
                return curriedFn(...args.concat(Array.from(arguments)))
            }
            // return function (...args2) {
            //     return curriedFn(...args.concat(args2))
            // }
        }
        return fn(...args)
    }
}

const curried = curry(getSum)

console.log(curried(1,2,3))
console.log(curried(1)(2, 3))
console.log(curried(1, 2)(3))
console.log(curried(1)(2)(3))