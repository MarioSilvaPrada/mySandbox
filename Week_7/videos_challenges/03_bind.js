// EXAMPLE 1

var colt = {
    firstName: 'Colt',
    sayHi: function() {
        return `Hi ${this.firstName}`
    },
    addNumbers: function(a,b,c,d) {
        return `${this.firstName} just calculated ${ a + b + c + d }`
    }
}

var elie = {
    firstName: 'Elie'
}

var elieCalc = colt.addNumbers.bind(elie,1,2,3,4);
elieCalc() // Elie just calculated 10

// With bind we do not need to know all the arguments up front!

var elieCalc2 = colt.addNumbers.bind(elie,1,2)
elieCalc2(3,4)

// EXAMPLE 2

var colt = {
    firstName: 'Colt',
    sayHi: function() {
        setTimeout( function () {
            console.log(`Hi ${this.firstName}`)
        }.bind(this), 1000)
    },
}