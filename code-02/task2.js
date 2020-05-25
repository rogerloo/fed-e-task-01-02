// 练习1
// 使用fp.add(x,y)和fp.map(f,x)创建一个能让functor里的值增加的函数ex1
const fp = require('lodash/fp')
const { MayBe, Container } = require('./support')

let maybe = MayBe.of([5, 6, 1])
// let ex1 =  //你需要实现的位置


// 练习2
// 实现一个函数ex2, 能够使用fp.first获取列表的第一个元素
let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
// let ex2 = 



// 练习3
// 实现一个函数ex3， 使用safeProp 和 fp.first 找到user的名字的首字母
let safeProp = fp.curry(function(x, o){
    return MayBe.of(o[x])
})
let user = { id:2, name:"Albert" }
// let ex3 =


// 练习4
// 使用MayBe重写ex4， 不要有if语句

let ex4 = function (n) {
    if (n) {
        return parseInt(n)
    }
}