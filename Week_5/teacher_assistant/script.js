let numStudents = prompt('How many students do you have?');

let numStudentsInt = parseInt(numStudents);

let studentArr = [];
let studentGradeArr = [];

for (let i = 0; i < numStudentsInt; i++) {
    let studentName = prompt('Please enter student name');

    let studentGrade = prompt('Please enter students grade');
    let studentGradeInt = parseInt(studentGrade);


    studentArr.push(studentName);
    studentGradeArr.push(studentGradeInt);
   
}

let sumArr = studentGradeArr.reduce((sum, num) => {
    return sum + num
})

let averageGrade = sumArr / numStudentsInt;

let studentName = prompt('Which student are you looking for?');

if (studentArr.indexOf(studentName) >= 0) {
    let index = studentArr.indexOf(studentName);
    let grade = studentGradeArr[index];
    let variation = ((grade / averageGrade) - 1) * 100;
    let variationFixed = variation.toFixed(0);
    
    alert(`${studentName} variation from average is ${variationFixed > 0 ? "+"+variationFixed : variationFixed}%`);
} else {
    alert('Sorry, we don’t have that student listed');
}


