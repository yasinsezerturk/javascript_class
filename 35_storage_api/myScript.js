// localStorage.setItem("name", "John Doe");
// const item = localStorage.getItem("name");
// console.log(item);
// localStorage.setItem("name", ["Ray Doe", "Lee Doe"]);
// const item2 = localStorage.getItem("name");
// console.log(item2);

// const name = ["John Doe", "Lee Doe"];
// localStorage.setItem("name", JSON.stringify(name));
// const item = JSON.parse(localStorage.getItem("name"));
// console.log(item);

//üzerine yazma ile ilgili sorun var. Bunu nasıl çözebiliriz? Ekleme yapmak istiyoruz.

// const name1 = ["John Doe", "Lee Doe"];
// localStorage.setItem("name", JSON.stringify(name1));
// const item = JSON.parse(localStorage.getItem("name"));
// console.log(item);
// const name2 = [
//   ...JSON.parse(localStorage.getItem("name")),
//   "Jhon Ray",
//   "Lee Ray",
// ];

// localStorage.setItem("name", JSON.stringify(name2));
// const item2 = JSON.parse(localStorage.getItem("name"));
// console.log(item2);

localStorage.removeItem("name");
localStorage.clear();

sessionStorage.setItem("name", "Ahmet Berk");
