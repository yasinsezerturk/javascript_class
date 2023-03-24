let text = `He's often called "Johnny"`;
console.log(text);
let text2 = `
istediğim gibi satır atlayabiliyorum
ister buraya yazarım
ister buraya
`;
console.log(text2);

let firstName = "John";
let lastName = "Doe";
let text3 = `Welcome ${firstName} ${lastName}!`;
console.log(text3);

let price = 10;
let tax = 0.25;
let total = `Total: ${(price * (1 + tax)).toFixed(3)}`;
console.log(total);
