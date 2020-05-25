//  IO 函子的问题
const fp = require('lodash/fp')
const fs = require('fs')

class IO {
    static of (value) {
        return new IO(function () {
            return value
        })
    }

    constructor (fn){
        this._value = fn
    }

    map (fn){
        return new IO(fp.flowRight(fn, this._value))
    }

    join (){
        return this._value()
    }

    flatMap (fn){
        return this.map(fn).join()
    }

}
let readFile = function (filename) {
    return new IO(function () {
        return fs.readFileSync(filename, 'utf-8')
    })
}

let print = function (x) {
    return new IO(function () {
        // console.log(x)
        return x
    })
}

// let cat = fp.flowRight(print, readFile)

// let r = cat('package.json')._value()._value()
let r = readFile('package.json')
            .map(fp.toUpper)
            .flatMap(print)
            .join()


console.log(r)

class monad{
    static of (value){
        return new monad(function(){
            return value
        })
    }
    constructor(fn){
        this._value = fn
    }
    map(fn){
        return new monad(fp.flowRight(fn,this._value))
    }
    join(){
        return this._value()
    }
    flatMap(fn){
        return this.map(fn).join()
    }
}