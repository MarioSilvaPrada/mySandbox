function SpaceObject(weight, kmTravelled, timedElapsed) {
    this.weight = weight;
    this.kmTravelled = kmTravelled;
    this.timedElapsed = timedElapsed;
}

function Planet (weight, kmTravelled, timedElapsed) {
    SpaceObject.call(this, weight, kmTravelled, timedElapsed);
}


SpaceObject.prototype.getVelocity = function () {
    console.log(this.kmTravelled / this.timedElapsed)
}


// To connect prototypes defined in SpaceOBject to Planet and Meteorite
Planet.prototype = Object.create(SpaceObject.prototype);

// Change the name of the constructor
Object.defineProperty(Planet.prototype, 'constructor', {
    value: Planet,
    enumerable: false,
    writable: true
})


function Meteorite (weight, kmTravelled, timedElapsed) {
    SpaceObject.call(this, weight, kmTravelled, timedElapsed);
}

// To connect prototypes defined in SpaceOBject to Planet and Meteorite
Meteorite.prototype = Object.create(SpaceObject.prototype);

// Change the name of the constructor
Object.defineProperty(Meteorite.prototype, 'constructor', {
    value: Meteorite,
    enumerable: false,
    writable: true
})


let mars = new Planet (200, 100, 25);
let kesen = new Meteorite (300, 500, 50);

mars.getVelocity();
kesen.getVelocity()

