//inheritance-kalıtım

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return "I have a " + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ", it is a " + this.model;
//   }
// }

// let myCar = new Model("Ford", "Mustang");
// console.log(myCar);
// console.log(myCar.show());

//statik function

class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!";
  }
}

// let myCar=new Car ("Ford")

console.log(Car.hello());
