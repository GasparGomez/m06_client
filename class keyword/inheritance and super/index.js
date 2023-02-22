class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        return "VROOM!"
    }
    toString() {
        return `The make, model, and year are ${this.make}, ${this.model}, ${this.year}`
    }
}

var vehicle = new Vehicle("Tractor", "John Deere", 1999)

console.log(vehicle.toString()); // 'The make, model, and year are Tractor John Deere 1999'