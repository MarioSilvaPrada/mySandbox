class SpaceObject {
    constructor (weight, kmTravelled, timedElapsed) {
        this.weight = weight;
        this.kmTravelled = kmTravelled;
        this.timedElapsed = timedElapsed;
    }

    getVelocity() {
        console.log(this.kmTravelled / this.timedElapsed);
    }
}

class Planet extends SpaceObject {
    constructor (weight, kmTravelled, timedElapsed) {
        super (weight, kmTravelled, timedElapsed); // super equivale ao call() no constructor function
    }
}

class Meteorite extends SpaceObject {
    constructor (weight, kmTravelled, timedElapsed) {
        super (weight, kmTravelled, timedElapsed) 
    }
}

let mars = new Planet (200, 100, 25);
let kesen = new Meteorite (300, 500, 50);

mars.getVelocity();
kesen.getVelocity()
