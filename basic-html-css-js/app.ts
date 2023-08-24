console.log("Hello World from console");
// document.getElementById("t").innerHTML = "Welcome home!";

//Variables and Data Types
let username: string = "Abhinav";
console.log(username);
console.log(typeof username);
let num: number = 2;
// num = "David"; //TS Error
console.log(num);
console.log(typeof num);
const age = 23;
console.log("Hello");

let isMinor: boolean;
isMinor = false;
// isMinor = 0; //TS Error

//Classes and Objects
class Car {
  numOfWheels: number;
  private cost: number;

  constructor(numOfWheels, cost) {
    this.numOfWheels = numOfWheels;
    this.cost = cost;
  }

  public start() {
    console.log(
      "The car with " +
        this.numOfWheels +
        " and cost " +
        this.cost +
        " has started"
    );
  }
}
const car = new Car(4, 2200);
car.start();
console.log(car.constructor);

// we can create objects directly, without a class
let car2 = {
  model: "Honda",
  maxSpeed: 220,
};

console.log(car2.model);
console.log(car2.constructor);
