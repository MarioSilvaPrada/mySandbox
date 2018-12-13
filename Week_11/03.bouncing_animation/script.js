let p = document.querySelectorAll('p');

let pArr = Array.from(p);

pArr[0].style.color = 'red';
pArr[1].style.color = 'black';


setInterval(() => {
    pArr[0].style.color === 'red' ? pArr[0].style.color = 'black' : pArr[0].style.color = 'red';

    pArr[1].style.color === 'black' ? pArr[1].style.color = 'red' : pArr[1].style.color = 'black';
}, 1000)