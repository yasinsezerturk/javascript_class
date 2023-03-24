//if

// let hour = 8;
// //if(burası true olursa içerideki fonksiyonu çalıştırır)
// if (hour < 18) {
//   console.log("iyi günler");
// }
// if (hour > 18) {
//   console.log("iyi akşamlar");
// }

//else

// let hour = 19;
// if (hour < 18) {
//   console.log("iyi günler");
// } else {
//   console.log("iyi akşamlar");
// }

// let hour = 8;
// if (hour < 18) {
//   console.log("iyi günler");
//   //18-22 arasındaysa
// } else if (hour < 22) {
//   console.log("iyi akşamlar");
//   //22 den büyükse
// } else {
//   console.log("iyi geceler");
// }

//switch

switch (new Date().getDay()) {
  case 0:
    day = "Pazar";
    break;
  case 1:
    day = "Pazartesi";
    break;
  case 2:
    day = "Salı";
    break;
  case 3:
    day = "Çarşamba";
    break;
  case 4:
    day = "Perşembe";
    break;
  case 5:
    day = "Cuma";
    break;
  case 6:
    day = "Cumartesi";
    break;
  default:
    day = "Hatalı veri";
}

console.log(day);
