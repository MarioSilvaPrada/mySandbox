import {logIn, signUp} from './module.js';



$('.input')[0].innerHTML = logIn();

$('.sign-btn').on('click', function(e) {
    e.preventDefault();
    let sign = $('.sign-status')[0];
    if (sign.textContent === 'Log In') {
        sign.textContent = 'Sign Up';
        $('.input')[0].innerHTML = signUp();
        $('.sign-btn')[0].textContent = 'Log In';
    }
    else {
        sign.textContent = 'Log In';
        $('.input')[0].innerHTML = logIn();
        $('.sign-btn')[0].textContent = 'Sign Up'
    }
    
});





