// const vehicle = ["mustang", "f-150", "expedition"];
// const car = vehicle[0];
// const truck = vehicle[1];
// console.log(car);
// const [car2, truck2, suv2] = vehicle;
// const [car1] = vehicle;
// console.log(car1);
// console.log(car2);

// const person = {
//   name: "mustafa",
//   age: 25,
//   location: "turkey",
//   like: "hamburger",
// };
// const { name: name1, age } = person;
// console.log(name1);
// console.log(age);

const vehicleOne = {
  brand: "ford",
  model: "mustang",
  type: "car",
  year: 2021,
  color: "red",
};
function myVehicle2({ type, color, brand, model }) {
  const message =
    "my " + type + " is a " + color + " " + brand + " " + model + ".";
  console.log(message);
}
myVehicle2(vehicleOne);
