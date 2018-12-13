let parag = document.querySelectorAll('p');

let paragraphArr = Array.from(parag);


paragraphArr.map(parag => {
    parag.style.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
})
