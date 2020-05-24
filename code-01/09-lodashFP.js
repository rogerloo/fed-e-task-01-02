const _ = require('lodash')
const fp = require('lodash/fp')


// const trace = _.curry((tag, v) =>{
//     console.log(tag,v)
//     return v
// })

// const f = fp.flowRight(fp.join('-'),trace('map后'), fp.map(_.toLower),trace('split后'), fp.split(' '))
// const f = fp.flowRight(fp.join('-'), fp.map(fp.toLower), fp.split(' '))


// console.log(f('now i love'))

// _.map的坑
// console.log(_.map(['23', '412', '10'], parseInt))
console.log(fp.map(parseInt, ['23', '412', '10']))