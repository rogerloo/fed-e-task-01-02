const fp = require('lodash/fp')

// const f = fp.flowRight(fp.replace(/\s+/g, '_'), fp.toLower)

// console.log(f('HELLO    WORLD'))

const firstLetterToUpper = fp.flowRight(fp.join('. '),  fp.map(fp.flowRight(fp.first, fp.toUpper)), fp.split(' '))

console.log(firstLetterToUpper('world wild web'))