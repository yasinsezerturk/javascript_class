//json (javascript object notation)

let text = '{"firstName":"Jhon"}'
console.log(text)

let text2 = '{"firstName":"Ali","lastName":"Bay"}'
console.log(text2)

let text3 = '{"employees":[{"firstName":"John","lastName":"Doe"},{"firstName":"Ali","lastName":"Veli"}]}'
console.log(text3)
//json'dan objeye çevirme methodu
console.log(JSON.parse(text3))

console.log(JSON.stringify(JSON.parse(text3)))