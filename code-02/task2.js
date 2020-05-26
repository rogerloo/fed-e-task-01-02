// 练习1
// 使用fp.add(x,y)和fp.map(f,x)创建一个能让functor里的值增加的函数ex1
const fp = require('lodash/fp')
const { MayBe, Container } = require('./support')

let maybe = MayBe.of([5, 6, 1])
// let ex1 =  //你需要实现的位置
let ex1 = functor => functor.map(val=>fp.map(x=>fp.add(x, 2), val))

// console.log(ex1(maybe))

// 练习2
// 实现一个函数ex2, 能够使用fp.first获取列表的第一个元素
let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
let dealFunctor = (functor, fn) => fn(functor._value)
let curried = fp.curry(dealFunctor)
let ex2 = curried(xs)
ex2(fp.first)
// console.log(ex2(fp.first))




let log = function (msg) {
    console.log(msg)
}



// 练习3
// 实现一个函数ex3， 使用safeProp 和 fp.first 找到user的名字的首字母
let safeProp = fp.curry(function(x, o){
    return MayBe.of(o[x])
})
let user = { id:2, name:"Albert" }
const nameCurried = safeProp('name')
const getFunctorValue = functor=>functor._value
let ex3 = fp.flowRight(fp.first, getFunctorValue, nameCurried)
// ex3(user)
// console.log(ex3(user))













// 练习4
// 使用MayBe重写ex4， 不要有if语句

// let ex4 = function (n) {
//     if (n) {
//         return parseInt(n)
//     }
// }
let ex4 = n => MayBe.of(n)
                    .map(parseInt)


console.log(ex4(213.42))
console.log(ex4(null))