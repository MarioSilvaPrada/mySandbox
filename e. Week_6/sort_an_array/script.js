let personName = prompt('user input');

let mainArr = [];

while (personName !== 'terminate*') {
    let personAge = parseFloat(prompt('age'));
    let personProfession = prompt('profession');
    mainArr.push([personName, personAge, personProfession]);
    personName = prompt('user input');
}

if (mainArr.length > 0) {

    let mainArrSorted = mainArr.slice();
    for (let i = 0; i < mainArrSorted.length - 1; i++) {
        for (let j = i + 1; j < mainArrSorted.length; j++) {
            if (mainArrSorted[i][1] > mainArrSorted[j][1]) {
                let temp = mainArrSorted[i];
                mainArrSorted[i] = mainArrSorted[j];
                mainArrSorted[j] = temp;
            }
        }
    }

    let output = [];

    for (let i = 0; i < mainArrSorted.length; i++) {
        output.push(` ${mainArrSorted[i][0]} - ${mainArrSorted[i][1]}`);
    }

    alert(`list:${output}`);
    alert('Goodbye');

} else {
    alert('You did not insert any person in the list');
    alert('Goodbye');
}