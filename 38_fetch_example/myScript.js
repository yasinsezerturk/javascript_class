// class Request {
//   get(url) {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//   }
// }

// const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/albums");

// class Request {
//   get(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => resolve(data))
//         .catch((err) => reject(err));
//     });
//   }
// }
// const request = new Request();
// let albums;
// request
//   .get("https://jsonplaceholder.typicode.com/albums")
//   .then((data) => {
//     albums = data;
//     console.log(albums);
//   })
//   .catch((err) => consolo.log(err));

// class Request {
//   async get(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }
// }

// const request = new Request();
// let albums;
// request
//   .get("https://jsonplaceholder.typicode.com/albums")
//   .then((data) => {
//     albums = data;
//     console.log(albums);
//   })
//   .catch((err) => consolo.log(err));

// class Request {
//   post(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: "POST",
//         body: JSON.stringify(data),
//         header: {
//           "Content-type": "application/json;charset=UTF-8",
//         },
//       })
//         .then((response) => response.json())
//         .then((data) => resolve(data))
//         .catch((err) => reject(err));
//     });
//   }
// }
// request = new Request();
// request
//   .post("https://jsonplaceholder.typicode.com/albums", {
//     userId: 1,
//     title: "Thriller",
//   })
//   .then((newAlbum) => console.log(newAlbum))
//   .catch((err) => console.log(err));

// class Request {
//   async post(url, data) {
//     const response = await fetch(url, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json;charset=UTF-8",
//       },
//     });
//     const responsedata = await response.json();
//     return responsedata;
//   }
// }
// request = new Request();
// request
//   .post("https://jsonplaceholder.typicode.com/albums", {
//     userId: 1,
//     title: "Thriller",
//   })
//   .then((newAlbum) => console.log(newAlbum))
//   .catch((err) => console.log(err));

// class Request {
//   async put(url, data) {
//     const response = await fetch(url, {
//       method: "PUT",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json;charset=utf-8",
//       },
//     });
//     const responsedata = await response.json();
//     return responsedata;
//   }
// }
// request = new Request();
// request
//   .put("https://jsonplaceholder.typicode.com/albums/8", {
//     userId: 1,
//     title: "Thriller",
//   })
//   .then((album) => console.log(album))
//   .catch((err) => console.log(err));

// class Request {
//   async delete(url) {
//     const response = await fetch(url, {
//       method: "DELETE",
//     });
//     return "veri silme işlemi başarılı";
//   }
// }
// request = new Request();
// request
//   .delete("https://jsonplaceholder.typicode.com/albums/1")
//   .then((message) => console.log(message))
//   .catch((err) => console.log(err));
