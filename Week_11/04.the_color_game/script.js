let squares = Array.from(document.querySelectorAll('.square'));
let mainTitle = document.querySelector('.p2');

squares.map(square => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    square.style.background = `RGB(${red},${green},${blue})`;
});

let squareIndex = Math.floor(Math.random() * 6);
let choice = squares[squareIndex].style.background;

mainTitle.textContent = choice;

squares.map(square => {
    square.addEventListener('click', () => {
        let squareSelected = square.style.background;

        if (choice === squareSelected) {
            let header = document.querySelector('.first-row');
            header.style.background = choice;
            squares.map(square => {
                square.style.opacity = 1;
                square.style.background = choice;
            })
        }
        else {
            square.style.opacity = 0;
        }
    })
})








