// let text = 'bu bir " extra " stringdir';

// console.log(text);

// let text2 =
//   "istersek \t bir tab boşluk bırakabiliriz. İstersek \n yeni satıra da geçebiliriz.";
// console.log(text2);

// let text3 = "bu birinci metindir" + " bu ikinci metindir";
// console.log(text3);

// let text = "ASFASFASFASFJDAIOENFO";
// let lenght = text.length;
// console.log(lenght);

// slice(baslangıçPozisyonu,bitişPozisyonu-bitiş dahil değil-)
// let text = "Apple, Banane, Kiwi";
// // let part = text.slice(7, 13);
// // console.log(part);
// // let part2 = text.slice(7);
// // console.log(part2);
// let part3 = text.slice(0);
// console.log(part3); //string kopyalama yapabilir
// let part4 = text.slice(-5);
// console.log(part4);
// let part5 = text.slice(-7, 17);
// console.log(part5);

// let text = "Apple, Banane, Kiwi";
// let part = text.substring(7, 13);
// console.log(part);
// //substring negatif ifadeyi sıfır olarak kabul eder
// let part2 = text.substring(-5);
// console.log(part2);

// substr(start, length); //başlangıç ve sonrasında ne kadar uzunluk olacak onu ifade eder
// let text = "Apple, Banane, Kiwi";
// let part = text.substr(7, 5);
// console.log(part);

// let text = "Seni SEVIYORUM seviyorum";
// console.log(text);
// let newText = text.replace("seviyorum", "sevmiyorum");
// console.log(newText);
// let newText2 = text.replace(/SEVIYORUM/i, "sevmiyorum");
// console.log(newText2);
// let newText3 = text.replace(/SEVIYORUM/g, "sevmiyorum");
// console.log(newText3);
// let text2 = "Seni SEVIYORUM seviyorum";
// let newText4 = text2.replace(/seviyorum/g, "sevmiyorum");
// console.log(newText4);

// let newText5 = text2.replace(/SEVIYORUM/gi, "sevmiyorum");
// console.log(newText5);

// let text = "Seni seviyorum seviyorum Seviyorum";
// let newText = text.replaceAll("seviyorum", "sevmiyorum");
// console.log(newText);

// let text1 = "Hello World !";
// let text2 = text1.toUpperCase();
// console.log(text2);
// let text3 = text1.toLowerCase();
// console.log(text3);

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2, " ", text1);
// console.log(text3);

// let text1 = "           Hello World!!              ";
// console.log(text1);
// console.log(text1.length);
// let text2 = text1.trimStart();
// console.log(text2);
// console.log(text2.length);
// let text3 = text1.trimEnd();
// console.log(text3);
// console.log(text3.length);
// let text4 = text1.trim();
// console.log(text4);
// console.log(text4.length);
// console.log("-", text2, "-", text3, "-", text4);

// let str = "Hello    World     !";
// let letterCount = str.replace(/\s+/g, "").length;
// // s -> bir boşluk s+ -> birden fazla boşluk
// console.log(letterCount);

// let text = "567";
// let withPadStart = text.padStart(10, "x");
// console.log(withPadStart);
// let withPadSEnd = text.padEnd(10, "x");
// console.log(withPadSEnd);

//padStart padEnd sadece string ifadelerde kullanılır
// let myNumber = 5;
// let text = myNumber.toString();
// let padded = text.padStart(4, "0");
// let padNumber = myNumber.padStart(4, "0");
// console.log(padNumber);
// console.log(typeof padded);

// let text = "HELLO WORLD!";
// let charAt = text.charAt(4);
// console.log(charAt);
// let charAt2 = text.charAt(0);
// console.log(charAt2);
// let charCodeAt = text.charCodeAt(0);
// console.log(charCodeAt);
// let charProperty = text[6];
// console.log(charProperty);

// let x = text.length;
// console.log(x);
// let last = text[x - 1];
// console.log(last);

// let text = "HELLO WORLD!";
// let lastLetter = text.slice(-1);
// console.log(lastLetter);

// let text = "elma,şeftali,üzüm";
// let splitText = text.split(",");
// console.log(splitText);

// let text2 = "elma şeftali üzüm";
// let splitText2 = text2.split(" ");
// console.log(splitText2);
// let text3 = "elma şeftali üzüm";
// let splitText3 = text3.split("");
// console.log(splitText3);
// let splitText4 = text3.split(); //diziye dönüştürür
// console.log(splitText4);

// let email = "mustafa_selman@gmail.com";
// let slideMail = email.slice(0, 14).replace("_", " ");
// console.log(slideMail);
// let firstUpperName =
//   slideMail.charAt(0).toUpperCase() +
//   slideMail.slice(1, 8) +
//   slideMail.charAt(8).toUpperCase() +
//   slideMail.slice(9);
// console.log(firstUpperName);

//string search

// let text = "Please locate where 'locate' occurs!";
// let indexText = text.indexOf("locate");
// console.log(indexText);
// let indexText2 = text.lastIndexOf("locate");
// console.log(indexText2);
// let indexText3 = text.lastIndexOf("loxcate");
// console.log(indexText3);
// let indexText4 = text.indexOf("locate", 15);
// console.log(indexText4);
// let indexText5 = text.lastIndexOf("locate", 15);
// console.log(indexText5);

// let text = "Please Locate where 'locate' occurs!";
// let searchText = text.search("locate");
// console.log(searchText);
// let searchText2 = text.search(/locate/i);
// console.log(searchText2);

// let text = "The rain in SPAIN stays mainly in the plain";
// let textMatch = text.match(/ain/g);
// console.log(textMatch);
// let textMatch2 = text.match(/ain/gi);
// console.log(textMatch2);  //büyük küçük harf duyarlı

// let text = "Hello world, welcome to the universe.";
// let textIncludes = text.includes("world");
// console.log(textIncludes); //true
// let textIncludes2 = text.includes("world", 12);
// console.log(textIncludes2); //false

// let text = "Hello world, welcome to the universe.";
// let textStartsWith = text.startsWith("Hello");
// console.log(textStartsWith);
// let textStartsWith2 = text.startsWith("Hello", 12);
// console.log(textStartsWith2);
// let textEndsWith = text.endsWith("universe.");
// console.log(textEndsWith);
