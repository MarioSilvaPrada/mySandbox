// Example 1

function House(bedrooms, bathrooms, numSqft) {
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}

var firstHouse = new House (2,2,1000);
firstHouse.bedrooms // 2
firstHouse.bathrooms // 2
firstHouse.numSqft // 1000

//Exercice

function Dog (name, age) {
    this.name = name;
    this.age = age;
    this.bark = function() {
        return `${this.name} just barked`
    }
}

var rusty = new Dog('Rusty', 2) // Rusty just barked

/*
NEW Keyword - What it does?
1 - it first creates an empty object 
2 - it then sets the keyword 'this' to be that empty object
3 - it adds the line 'return this' to the end of the function, which folows it
4 - it adds a property onto the empty object called "__proto__", which links the prototype property
on the costructor function to the empty object 
*/

// Example 2

function Car (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Motorcycle (make, model, year) {
    //using call
    Car.call(this, make, model, year);
    this.numWheels = 2;
}

function Motorcycle (make, model, year) {
    //using apply
    Car.call(this, [make, model, year]);
    this.numWheels = 2;
}

function Motorcycle (make, model, year) {
    //even better using apply with argumetns
    Car.call(this, arguments);
    this.numWheels = 2;
}


//

