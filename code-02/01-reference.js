// let obj = {name: 'roger'}

// let ali = obj

// obj = null

// function objGroup(obj1, obj2) {
//     obj1.next = obj2
//     obj2.prev = obj1
//     return {
//         o1: obj1,
//         o2: obj2
//     }
// }

// let obj = objGroup({name:'obj1'},{name:'obj2'})
// console.log(obj)

// const user1 = {age: 11}
// const user2 = {age: 22}
// const user3 = {age: 33}

// const nameList = [user1.age, user2.age, user3.age]

// function fn(params) {
//     const num1 = 1 
//     const num2 = 2
// }

// fn()

function fn(params) {
    const obj1 = {}
    const obj2 = {}

    obj1.name = obj2
    obj2.name = obj1
    return 'roger'
}

fn()