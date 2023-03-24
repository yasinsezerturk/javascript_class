//default parametre
// function myFunction(x, y) {
//   if (y === undefined) {
//     y = 2;
//   }
//   return x + y;
// }

// console.log(myFunction(4));

// function myFunction(x, y = 2) {
//   return x + y;
// }
// console.log(myFunction(5));

// function sum(...args) {
//   let sum = 0;
//   console.log(args);
//   for (let arg of args) sum += arg;
//   return sum;
// }

// let x = sum(1, 2, 3, 4, 5);
// console.log(x);

//self-invoke function

// function self1() {
//   console.log("self invoke func1");
// }

// self1();

(function self2() {
  console.log("self invoke func1");
})();
