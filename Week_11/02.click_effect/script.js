let button = document.querySelector('button');
let image = document.querySelector('img');

button.addEventListener('click', changeImage);

function changeImage() {
    if (image.alt === 'img1') {
        image.setAttribute('src', './img/img2.jpg');
        image.setAttribute('alt', 'img2')
    }
    else {
        image.setAttribute('src', './img/img1.jpg');
        image.setAttribute('alt', 'img1')
    }

}
