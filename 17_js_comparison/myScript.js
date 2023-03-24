// let x = 8;
// console.log(x == 8);
// let y = "8";
// console.log(y == 8);
// console.log(x == y);
// console.log(x === y);
// console.log(8 === 8);
// console.log(x != "8");
// console.log(x !== "8");

let x = 8;
let y = 10;
// console.log(x >= y);
// console.log(x < y);
// console.log(x < 10 && y > 11);
//herhangi biri false olursa false
//true olması için ikisinin de true olması gerekiyor
// console.log(x < 10 || y > 11);
//true olması için bir tanesi true olsa yeter
//false olması için ikisi de false olmalı

//conditional (ternary) operatör

// let yas = 12;
// let oyverme =
//   yas < 18 ? "çok küçük oy veremez" : "oy vermek için yeterli yaşta";
// console.log(oyverme);

//nullish coelescing operator (??)
//name??name2
//ilk değer undefined/null değilse ilk değeri, undefined/null ise ikinci değeri yazar

let name = "mustafa";
let name2; //undefined
let name3 = null;
let name4 = 0;
let name5 = "";
let name6 = NaN;
let text = "isim yok";

// console.log(name ?? text);
// console.log(name2 ?? text);
// console.log(name3 ?? text);
// console.log(name4 ?? text);
// console.log(name5 ?? text);
// console.log(name6 ?? text);
// console.log("---------------");

//||logical or
//?? den farkı 0,"",NaN gelirse ikinici değeri yazması- herhangi bir geçerli değer görürse yazar
// console.log(name || text);
// console.log(name2 || text);
// console.log(name3 || text);
// console.log(name4 || text);
// console.log(name5 || text);
// console.log(name6 || text);
// console.log("---------------");
//&& and operator (|| nın tam tersi olarak çalışır)(solda bir değer görürse sağdakini çalıştırır)
// console.log(name && text);
// console.log(name2 && text);
// console.log(name3 && text);
// console.log(name4 && text);
// console.log(name5 && text);
// console.log(name6 && text);

//optional chaining operator

// const person = {
//   name: "Alice",
// };

// const lastName = person.lastName?.value;
// console.log(lastName);
// const lastNameValue = person.lastName?.["value"];
// console.log(lastNameValue);
// const myFunc = person.myFunc?.();
// console.log(myFunc);
