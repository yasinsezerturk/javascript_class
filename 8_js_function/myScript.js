// function myFunction(parameter1, parameter2) {
//   //buradaki alanda myFunction çalışır
// }

// myFunction(argument1, argument2);
// myFunction(argument3, argument4);

// function topla(deger1, deger2) {
//   let toplam = deger1 + deger2;
//   console.log(toplam);
//   return toplam;
// }

// topla(3, 6);
// topla(4, 7);

// let a;
// a = topla(7, 8);
// console.log(a);

// //Gösterimler

// // function a() {}
// // let b=function(){}
// let c = function c() {};

// function carpmaIslemi(param1, param2) {
//   return param1 * param2;
// }
// console.log(carpmaIslemi(3, 4));

// function toCelsius(fahrenheit) {
//   return (5 / 9) * (fahrenheit - 32);
// }

// console.log(toCelsius(89));

// let x = toCelsius(134);
// let text = "hava sıcaklığı " + x + " celsius";
// console.log(text);

// function myFunction() {
//   let carName = "Volvo";
//   //burada carName kullanılabilir
// }
// //burada kullanamayız

// function islem(param1, param2) {
//   let toplam = param1 + param2;
//   let fark = param1 - param2;
//   return toplam + fark;
// }

// console.log(islem(45, 43));

function kareFarki(param1, param2) {
  let fark = param1 ** 2 - param2 ** 2;
  return fark;
}

console.log(kareFarki(4, 3));
