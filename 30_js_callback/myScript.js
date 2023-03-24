// function myDisplayer(massage) {
//   console.log(massage);
// }

// function myFirst() {
//   myDisplayer("Hello");
// }

// function mySecond() {
//   myDisplayer("Goodbye");
// }

// mySecond();
// myFirst();
//hangisi üstte ise o çalışır ama bu durum bizim için yeterli değil

// function myDisplayer(some) {
//   console.log(some);
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   myDisplayer(sum);
// }

// myCalculator(1, 2);

// function myDisplayer(some) {
//   console.log(some);
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// let result = myCalculator(5, 5);
// myDisplayer(result);

// function myDisplayer(some) {
//   console.log(some);
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(5, 6, myDisplayer);

function myFunction() {
  console.log("function running...");
}

setTimeout(myFunction, 3000);

function myFunction() {
  console.log("function running...");
}

setInterval(myFunction, 3000);
