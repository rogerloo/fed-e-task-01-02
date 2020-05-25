class Left {
    static of(val){
        return new Left(val)
    }
    constructor (val){
        this._value = val
    }
    map(fn){
        return this
    }
}

class Right {
    static of(val){
        return new Right(val)
    }
    constructor (val){
        this._value = val
    }
    map(fn){
        return Right.of(fn(this._value))
    }
}

// let r1 = Right.of(12).map(x => x+2)
// let r2 = Left.of(12).map(x => x+2)

// console.log(r1)
// console.log(r2)

function parseJSON(str) {
    try {
        return Right.of(JSON.parse(str))
    } catch (e) {
        return Left.of({ error: e.message})
    }
}

let r = parseJSON('{ "name":w "zs" }').map(x=>x.name.toUpperCase())
// console.log(r)


class a{
    static of(value){
        return new a(value)
    }
    constructor(value){
        this._value = value
    }
    map(fn){
        return this
    }
}
class b{
    static of(value){
        return new a(value)
    }
    constructor(value){
        this._value = value
    }
    map(fn){
        return b.of(fn(this._value))
    }
}
let c = function (value){
    try {
        return b.of(JSON.parse(value))
    } catch (error) {
        return a.of({errorName:error.name,errorMessage: error.message})
    }
}
console.log(c('{ "name":w "zs" }').map(x=>x.name.toUpperCase()))