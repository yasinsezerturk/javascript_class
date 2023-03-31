// function fetchResponse() {
//   fetch("fetch.txt")
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err));
// }
// fetchResponse();

function getTextFile() {
  fetch("fetch.txt")
    .then((response) => response.text())
    .then((text) => console.log(text))
    .catch((err) => console.log(err));
}

getTextFile();

function getJSONFile() {
  fetch("fetch.json")
    .then((response) => response.json())
    .then((text) => console.log(text))
    .catch((err) => console.log(err));
}

getJSONFile();
