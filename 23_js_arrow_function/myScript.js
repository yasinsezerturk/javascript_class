// function myFunction (){
//     console.log("Hello")
// }

// myFunction()

//arrow function
// let hello=""
// hello=() => {
//     return "hello world2"
// }
// console.log(hello())

// hello=() => "hello world2"
// console.log(hello())

// let hello =value=>"hello world" + value 
// console.log(hello(" and Turkey"))

const person ={
    firstName:"John",
    lastName:"Doe",
    id:5566,
    fullName:function(){
        return this.firstName+" "+this.lastName
    },
    fullName2:()=>this.firstName+" "+this.lastName
}

console.log(person.fullName())
console.log(person.fullName2()) //arrow function obje çinde çalışmıyor

