function outer (a) {
    return function inner (b) {
        return a + b;
    }
}

outer (5)(5) // 10

var storeOuter = outer(5)
storeOuter(10) //15

/*
Closures exists when an inner function makes use of a variable 
declared in outer fucntion which has previously returned
*/

//Example 2

function counter() {
    var count = 0;
    return function () {
        return ++ count;
    }
}

counter1 = counter()
counter1() // 1
counter1() // 2

counter2 = counter()
counter2() // 1
counter2() // 2


counter1() // 3 this is not affected by counter 2!

count // count is not defined - because it is private!

//Example 3

function classRoom() {
    var instructors = ['Colt', 'Elie'];
    return {
        getInstructors: function() {
            return instructors;
        },
        addInstructors: function(instructor) {
            instructors.push(instructor);
            return instructors;
        }
    }
}

course1 = classRoom();
course1.getInstructors() //['Colt', 'Elie']
course1.addInstructors('Ian') //['Colt', 'Elie', 'Ian']
course1.getInstructors() //['Colt', 'Elie', 'Ian']

course2 = classRoom();
course.2.getInstructors() // ['Colt', 'Elie'] - not affected by course1!

//we do not have access to the instructors variable