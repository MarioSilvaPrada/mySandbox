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

const input = document.querySelector('.input');

input.innerHTML = userSign();

let signBtn = document.querySelector('.sign-btn');


signBtn.addEventListener('click', function () {

    let sign = document.querySelector('.sign-status');
    if (sign.textContent === 'Log In') {
        sign.textContent = 'Sign Up';
        signBtn.textContent = 'Log In';
        sign.appendChild(`<label for="" class='user-name'>Name</label>
        <input type="text" placeholder="Your Name" class="u-full-width input-name">`);

    }
    else {
        sign.textContent = 'Log In';
        signBtn.textContent = 'Sign Up';
        // document.querySelector('.user-name').stye.display = 'none';
        // document.querySelector('.input-name').stye.display = 'none';
    }
});

document.querySelector('input[type="submit"]').addEventListener('click', function () {

    if (!isLogin) {
        let name = document.querySelector('.input-name').value;
        let email = document.querySelector('.input-email').value;
        let password = document.querySelector('.input-password').value;

        // hasUser(email) ? input.html(userExist()) : createUser(name, email, password); console.log(userDatabase)

        if (hasUser(email)) {

            input.innerHTML = userExist();

            document.querySelector('.ok-btn').addEventListener('click', function () {
                input.innerHTML = userSign();
            });
        }
        else {
            createUser(name, email, password);
            console.log(userDatabase)
        }

        document.querySelector('.input-name').value = '';
        document.querySelector('.input-email').value = '';
        document.querySelector('.input-password').value = '';

    }
    else {
        alert('log out first before you create a new account')
    }
    
})





