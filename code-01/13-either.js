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

let r = parseJSON('{ "name": "zs" }').map(x=>x.name.toUpperCase())
console.log(r)