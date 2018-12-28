function fiveNumb (a, b, c, d, e) {
    console.log (a + b + c + d + e);
};

let num1 = fiveNumb.bind(null, 2);

let num2 = num1.bind(null,3);

let num3 = num2.bind(null,4);

let num4 = num3.bind(null,5);

let finalNum = num4.bind(null,6);

finalNum();


