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
