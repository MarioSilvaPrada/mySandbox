import { userSign, userExist, userCreated } from './module.js';



let userDatabase = [];
let isLogin = false;
let mailLoggedIn = '';

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.followers = 0;
        this.following = 0;
    }
}

// MAIN FUNCTIONS
function hasUser(mailUser) {
    return userDatabase.findIndex((user) => {
        return user.email === mailUser;
    }) !== -1;
}

function createUser(name, email, password) {
    userDatabase.push(new User(name, email, password));
}

function getUser(mail) {
    return userDatabase.find((user) => {
        return user.email === mail;
    });
}

const input = $('.input');

input.html(userSign());

let signBtn = $('.sign-btn');

signBtn.on('click', function () {
    
    let sign = $('.sign-status')[0];
    if (sign.textContent === 'Log In') {
        sign.textContent = 'Sign Up';
        $('.sign-btn')[0].textContent = 'Log In';
        $('h3').after(`<label for="" class='user-name'>Name</label>
        <input type="text" placeholder="Your Name" class="u-full-width input-name">`)

    }
    else {
        sign.textContent = 'Log In';
        $('.sign-btn')[0].textContent = 'Sign Up';
        $('.user-name').hide();
        $('.input-name').hide();
    }
});

$('input[type="submit"]').on('click', function () {

    if (!isLogin) {
        let name = $('.input-name').val();
        let email = $('.input-email').val();
        let password = $('.input-password').val();

        // hasUser(email) ? input.html(userExist()) : createUser(name, email, password); console.log(userDatabase)

        if (hasUser(email)) {

           input.html(userExist())
        }
        else {
            createUser(name, email, password); 
            console.log(userDatabase)
        }
        
        $('.input-name').val('');
        $('.input-email').val('');
        $('.input-password').val('');

    }
    else {
        alert('log out first before you create a new account')
    }
    $('.ok-btn').on('click', function() {
            input.html(userSign());
        });

})





