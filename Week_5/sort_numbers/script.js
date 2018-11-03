
let numbArr = [];

for (let i = 0; i < 3; i++) {
    let numbers = parseFloat(prompt('input numbers'));
    if(numbArr.length == 0 ) {
        numbArr.push(numbers);
    } else if (numbArr.length == 1 && numbers < numbArr[0]) {
        numbArr.push(numbers);
    } else if (numbArr.length == 1 && numbers > numbArr[0]) {
        numbArr.unshift(numbers);
    } else if (numbArr.length == 2  &&  numbers < numbArr[0] && numbers < numbArr[1]) {
        numbArr.push(numbers);
    } else if (numbArr.length == 2   && numbers < numbArr[0] && numbers > numbArr[1]) {
        numbArr.splice(1,0,numbers);
    } else if (numbArr.length == 2  && numbers > numbArr[0] && numbers > numbArr[1]) {
        numbArr.unshift(numbers);
    } else if (numbers == numbArr[0] || numbers == numbArr[1]) {
        numbArr.push(numbers);
    }

}

alert (`The order is ${numbArr.join(', ')}`);

                                                                                                                                               

