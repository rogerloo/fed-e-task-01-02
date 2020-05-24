// function compose(f, g) {
//     return function (value) {
//         return f(g(value))
//     }
// }

// function reverse(array) {
//     return array.reverse()
// }

// function arrayFisrt(array) {
//     return array[0]
// }

// const last = compose(arrayFisrt, reverse)

// console.log(last([1123,22,5,613,61]))

// lodash中的函数组合方法 _.flowRight()
const _ = require('lodash')

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()

// const f = _.flowRight(toUpper, first, reverse)
// console.log(f(['abs','ewe','fsa','fa','roger']))

// 函数组合的实现

// function compose(...args) {
//     return function (value) {
//         return args.reverse().reduce((a, b)=>{
//             return b(a)
//         }, value)
//     }
// }

const compose = (...args) => val => args.reverse().reduce((a, b)=>b(a), val)

// const f = _.flowRight(_.toUpper, _.first, _.reverse)
// const f = _.flowRight(_.flowRight(_.toUpper, _.first,),  _.reverse)
// const f2 = _.flowRight(_.toUpper, _.flowRight(_.first, _.reverse))
// console.log(f(['abs','ewe','fsa','fa','roger']))
// console.log(f2(['abs','ewe','fsa','fa','roger']))

const split = _.curry((sep, str)=>_.split(str, sep))

const join = _.curry((sep, array)=>_.join(array, sep))

const map = _.curry((fn, array) => _.map(array, fn))

// const log = v=>{
//     console.log(v)
//     return v
// }

const trace = _.curry((tag, v) =>{
    console.log(tag,v)
    return v
})

const f = _.flowRight(join('-'),trace('map后'), map(_.toLower),trace('split后'), split(' '))


console.log(f('new i love'))