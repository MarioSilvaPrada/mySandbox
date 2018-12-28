//EXAMPLE 1

var person = {
    firstName: "Colt",
    sayHi: function() {
        return `Hi ${this.firstName}`
    },
    determineContext: function()  {
        return this === person
    },
    dog: {
        sayHello: function() {
            return `Hello ${this.firstName}`
        },
        determineContext: function() {
            return this === person
        }
    }
}

person.sayHi() // 'Hi Colt'
person.determineContext() //true

person.dog.sayHello.call(person); // 'Hello Colt'
person.dog.determineContext.call(person) //true


//EXAMPLE 2

var colt = {
    firstName: 'Colt',
    sayHi: function() {
        return `Hi ${this.firstName}`
    }
}

var elie = {
    firstName: 'Elie',
    sayHi: function() {
        return `Hi ${this.firstName}`
    }
}

// to avoid duplicate code we should make like this


var colt = {
    firstName: 'Colt',
    sayHi: function() {
        return `Hi ${this.firstName}`
    }
}

var elie = {
    firstName: 'Elie',
}

colt.sayHi() // Hi Colt
colt.sayHi.call(elie) // Hi Elie