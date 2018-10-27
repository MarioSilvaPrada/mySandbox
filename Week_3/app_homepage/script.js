let hamburger = document.querySelector(".fa-bars");
let modal = document.querySelector(".navbar-modal");

let close = document.querySelector(".fa-times");


//create toggle modal
hamburger.addEventListener('click', () => {
    modal.style.width = "100%";
});

close.addEventListener('click', () => {
    modal.style.width = "0%";
})

