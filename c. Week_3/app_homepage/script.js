let hamburger = document.querySelector(".fa-bars");
let modal = document.querySelector(".navbar-modal");

// let close = document.querySelector(".fa-times");


// set modal to width 0px
modal.style.width = '0'
//create toggle modal
hamburger.addEventListener('click', () => {
    console.log(modal.style.width)

    if (modal.style.width == '0px') {
        modal.style.width = "100%";
        hamburger.classList = "fas fa-times";
    } else {
        modal.style.width = '0px';
        hamburger.className = "fas fa-bars";
    }

});

// close.addEventListener('click', () => {
//     modal.style.width = "0%";
// })

