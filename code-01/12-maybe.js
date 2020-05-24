class MayBe {
    static of (val){
        return new MayBe(val)
    }

    constructor (value) {
        this._value = value
    }

    map (fn) {
        return this.isNoting() ? MayBe.of(null) : MayBe.of(fn(this._value))
    }

    isNoting () {
        return this._value === null || this._value === undefined
    }
}

let r = MayBe.of('Hello World')
    .map(x => x.toUpperCase())
    .map(x => null)
    .map(x => x.split(' '))

console.log(r)