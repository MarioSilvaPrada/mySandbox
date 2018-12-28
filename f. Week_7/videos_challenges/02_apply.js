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
    fistName: 'Elie'
}

colt.sayHi() // Hi Colt
colt.sayHi.apply(elie) //Hi Ellie

colt.addNumbers.call(ellie,1,2,3,4)
colt.addNumbers.apply(ellie,[1,2,3,4])


