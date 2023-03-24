// const person={
//     firstName:"John",
//     lastName:"Doe",
//     id:5566,
//     fullName:function(){
//         return this.firstName+" "+this.lastName
//     }
// }
// console.log(person.fullName())

// const person={
//     firstName:"John",
//     lastName:"Doe",
//     id:5566,
//     fullName:function(){
//         return this
//     }
// }
// console.log(person.fullName())
// console.log(this)

const obj={
    a:"custom"
}
function myFunction () {
    return this.a
}

obj.myFunction=myFunction
console.log(obj.myFunction())