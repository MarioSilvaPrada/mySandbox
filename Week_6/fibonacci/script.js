let answer = prompt('Do you want to run fibonacci?').toLowerCase();

if (answer === 'yes') {
    let num = 60;

    let lastValue = 0;
    let value = 1;
    let fib = 1;

    while (num >= 1) {
        alert(fib);
        fib = lastValue + value;
        lastValue = value;
        value = fib;
        num--;
        
    }
}

