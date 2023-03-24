// const person = {
//   firstName: "Yasin",
//   lastName: "Türk",
//   age: 33,
//   eyeColor: "brown",
// };

// console.log(person);
// console.log(person.age);
// console.log(person["eyeColor"]);
// console.log(person.eyeColor);

const person = {
  firstName: "Yasin",
  lastName: "Türk",
  fullName: function myFunction() {
    return this.firstName + " " + this.lastName;
  },
};

let name = person.fullName();
console.log(name);

//Gösterimler
// fullName: function ()
// myFunction();

x = new Date();
y = new String("mustafa");
z = new Number(15);

console.log(y);
console.log(z);
