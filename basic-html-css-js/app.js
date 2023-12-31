"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello World from console");
// document.getElementById("t").innerHTML = "Welcome home!";
//Variables and Data Types
var username = "Abhinav";
console.log(username);
console.log(typeof username);
var num = 2;
// num = "David"; //TS Error
console.log(num);
console.log(typeof num);
var age = 23;
console.log("Hello");
var isMinor;
isMinor = false;
// isMinor = 0; //TS Error
//Classes and Objects
var Car = /** @class */ (function () {
    function Car(numOfWheels, cost) {
        this.numOfWheels = numOfWheels;
        this.cost = cost;
    }
    Car.prototype.start = function () {
        console.log("The car with " +
            this.numOfWheels +
            " and cost " +
            this.cost +
            " has started");
    };
    return Car;
}());
var car = new Car(4, 2200);
car.start();
console.log(car.constructor);
// we can create objects directly, without a class
var car2 = {
    model: "Honda",
    maxSpeed: 220,
};
console.log(car2.model);
console.log(car2.constructor);
var pulsar = {
    maxSpeed: 220,
    powerInCC: 200,
    isCostly: false,
};
var ktm = {
    maxSpeed: 300,
    powerInCC: 250,
    isCostly: true,
    isAutomatic: "NO",
    stepney: 2,
};
console.log(ktm.stepney);
// Functions in Typescript
function add(n1, n2) {
    return n1 + n2;
}
var sum1 = add(2, 5);
// const sum2 = add("Hello", 5); //TS Error
console.log(sum1);
// const f: Function = function (n1: number, n2: number): number {
//   return n1 * n2;
// };
var f = function (n1, n2) {
    return n1 * n2;
};
var prod = f(3, 8);
console.log(prod);
var average = function (n1, n2, fn) {
    var s = fn(n1, n2);
    return s / 2;
};
var avg = average(4, 8, function (a, b) { return a + b; }); //Fat arrow syntax
console.log(avg);
//Inbuilt array methods
var nums = [2, 6, 12, 4];
// const doubles = [];
// for (let i = 0; i < nums.length; i++) {
//   doubles[i] = 2 * nums[i];
// }
// function doubleEachElement(e) {
//   return e * 2;
// }
// const doubles = nums.map(doubleEachElement);
var doubles = nums.map(function (n) { return n * 2; });
console.log(doubles);
