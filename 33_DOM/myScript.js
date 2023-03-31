// document.getElementById("demo").innerHTML = "Hello";

//dom elements
// document.getElementsByTagName("p");
// document.getElementsByClassName("intro");
// document.querySelectorAll("p.intro");
// document.form["frm1"];
// name = frm1;

//attribute

// document.getElementById("image").src = "emojilaugh-emoji.gif";
// document.getElementById("image").width = "300";
// document.getElementById("image").height = "300";

//validation

// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("burası zorunlu alan");
//     return false;
//   }
// }

// document.getElementById("p2").style.color = "blue";
// document.getElementById("p2").style.backgroundColor = "yellow";

// 4

// function changeColor() {
//   let x = (document.getElementById("id1").style.color = "red");
// }

//5
// function hide() {
//   let x = (document.getElementById("p2").style.visibility = "hidden");
// }
// function show() {
//   let x = (document.getElementById("p2").style.visibility = "visible");
// }

// 6

// function changeText(id) {
//   id.innerHTML = "Ooops!";
// }

// 7
// function upperCase() {
//   const x = document.getElementById("fname");
//   x.value = x.value.toUpperCase();
// }

// 8
// function mOver(obj) {
//   obj.innerHTML = "Thank You";
// }
// function mOut(obj) {
//   obj.innerHTML = "Mouse Over Me";
// }

//9
// document.getElementById("myBtn").addEventListener("click", function () {
//   alert("Hello World");
// });
// var x = document.getElementById("myBtn");
// var y = document.getElementById("demo");
// x.addEventListener("mouseover", myFunction);
// x.addEventListener("click", mySecondFunction);
// x.addEventListener("mouseout", myThirdFunction);
// function myFunction() {
//   y.innerHTML += "Moused over <br>";
// }
// function mySecondFunction() {
//   y.innerHTML += "Clicked <br>";
// }
// function myThirdFunction() {
//   y.innerHTML += "Moused out <br>";
// }

// 10
// document.getElementById("myP1").addEventListener(
//   "click",
//   function () {
//     alert("myP1");
//   },
//   false
// );

// document.getElementById("myDiv1").addEventListener(
//   "click",
//   function () {
//     alert("myDiv1");
//   },
//   false
// );
// document.getElementById("myP2").addEventListener(
//   "click",
//   function () {
//     alert("myP2");
//   },
//   true
// );

// document.getElementById("myDiv2").addEventListener(
//   "click",
//   function () {
//     alert("myDiv2");
//   },
//   true
// );

document.getElementById("myDIV").addEventListener("mousemove", myFunction);
function myFunction() {
  document.getElementById("demo").innerHTML = Math.random();
}
function removeHandler() {
  document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
}
