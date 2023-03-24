// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50,
//     eyeColor:"blue"
// }

// const x=person
// x.age=10

// console.log(x.age)
// console.log(person.age)

// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50,
//     eyeColor:"blue"
// }
// delete person.age
// console.log(person)

// const person={
//     name:"John",
//     age:30,
//     city:"New York"
// }

// const myArray=Object.values(person)
// console.log(myArray)

// const myArray2=Object.keys(person)
// console.log(myArray2)

// const myArray3=Object.entries(person)
// console.log(myArray3)

// console.log(myArray3[0][1])

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  //   this.nationality = "english";
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Doe", 48, "green");

// myFather.nationality = "English";

Person.prototype.nationality = "English";

console.log(myFather);
console.log(myMother);
