 
// support.js

class Container {
    static of (value) {
        return new Container(value)
    }
    constructor (value) {
        this._value = value
    }
    map (fn) {
        return Container.of(fn(this._value))
    }
}

class MayBe {
    static of (x) {
        return new MayBe(x)
    }
    constructor (x) {
        this._value = x
    }
    map (fn) {
        return this.isNothing? this: Container.of(fn(this._value))
    }
    isNothing () {
        return this._value === null || this._value === undefined
    }
}

module.exports = {
    MayBe,
    Container
}