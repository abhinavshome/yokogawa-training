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

type Bike = {
  maxSpeed: number;
  powerInCC: number;
  isCostly: boolean;
  isAutomatic?: "YES" | "NO";
  stepney?: any;
};

const pulsar: Bike = {
  maxSpeed: 220,
  powerInCC: 200,
  isCostly: false,
};

const ktm: Bike = {
  maxSpeed: 300,
  powerInCC: 250,
  isCostly: true,
  isAutomatic: "NO",
  stepney: 2,
};

console.log(ktm.stepney);

// Functions in Typescript
function add(n1: number, n2: number): number {
  return n1 + n2;
}

const sum1 = add(2, 5);
// const sum2 = add("Hello", 5); //TS Error
console.log(sum1);

// const f: Function = function (n1: number, n2: number): number {
//   return n1 * n2;
// };
const f: Function = (n1: number, n2: number): number => {
  return n1 * n2;
};
const prod = f(3, 8);
console.log(prod);

const average: Function = function (
  n1: number,
  n2: number,
  fn: Function
): number {
  const s = fn(n1, n2);
  return s / 2;
};

const avg = average(4, 8, (a, b) => a + b); //Fat arrow syntax
console.log(avg);

//Inbuilt array methods
const nums = [2, 6, 12, 4];

// const doubles = [];

// for (let i = 0; i < nums.length; i++) {
//   doubles[i] = 2 * nums[i];
// }

// function doubleEachElement(e) {
//   return e * 2;
// }

// const doubles = nums.map(doubleEachElement);

const doubles = nums.map((n) => n * 2);

console.log(doubles);
