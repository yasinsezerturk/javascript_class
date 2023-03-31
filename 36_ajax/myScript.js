// const xhttp = new XMLHttpRequest();
// xhttp.onload = function () {
//   document.getElementById("demo").innerHTML = this.responseText;
// };
// xhttp.open("GET", "ajax.txt");
// xhttp.send();

// const xhttp = new XMLHttpRequest();
// xhttp.onload = function () {
//   document.getElementById("demo").innerHTML = this.responseText;
//   console.log(this.responseText);
//   console.log(JSON.parse(this.responseText)); //coğrafi verinin x ve y koordinatını alabiliriz.
//   //sonuç string oluyor ama parse etmemiz gerekiyor
// };
// xhttp.open("GET", "ajax.json");
// xhttp.send();

// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//   console.log(this.readyState);
//   console.log(this.status);
// };
// xhttp.onload = function () {
//   document.getElementById("demo").innerHTML = this.responseText;
//   console.log(this);
// };
// xhttp.open("GET", "ajax.txt");
// xhttp.send();

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("load").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax.txt");
  xhttp.send();
}
