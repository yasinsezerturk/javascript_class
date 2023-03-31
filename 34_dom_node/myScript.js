// let myTitle = document.getElementById("head").innerHTML;
// console.log(myTitle);
// let myTitle2 = document.getElementById("head").firstChild.nodeValue;
// console.log(myTitle2);
// let myTitle3 = document.getElementById("head").childNodes[0].nodeValue;
// console.log(myTitle3);

// console.log(document.head.innerHTML);
// console.log(document.body.innerHTML);
// console.log(document.documentElement.innerHTML);

// console.log(document.getElementById("head"));

// const para = document.createElement("p");
// const node = document.createTextNode("this is new");
// para.appendChild(node);
// const element = document.getElementById("div1");
// element.appendChild(para);

// const para = document.createElement("p");
// const node = document.createTextNode("this is new");
// const element = document.getElementById("div1");
// para.appendChild(node);
// const child = document.getElementById("p1");
// element.insertBefore(para, child);

// const element = document.getElementById("p2");
// element.remove();

//replaceChild
// const para = document.createElement("p");
// const node = document.createTextNode("This is new");
// para.appendChild(node);
// const parent = document.getElementById("div1");
// const child = document.getElementById("p1");
// parent.replaceChild(para, child);

const myNodeList = document.querySelectorAll("p");
console.log(myNodeList);
console.log(myNodeList[1]);
const myNodeList2 = document.querySelectorAll("#p1");
console.log(myNodeList2);
const myNodeList3 = document.querySelectorAll(".param");
console.log(myNodeList3);

const myNode = document.querySelector("#p2");
const next = myNode.nextElementSibling.innerHTML;
const previous = myNode.previousElementSibling.innerHTML;
console.log(next);
console.log(previous);
