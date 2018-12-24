import * as htmlComponents from './module.js';

let userDatabase = [];
let isLogin = false;
let mailLoggedIn = '';

class User {
    constructor(name, email, password, id) {
        this.name = name;
        this.id = id;
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

function createUser(name, email, password,id) {
    userDatabase.push(new User(name, email, password,id));
}

function getUser(mail) {
    return userDatabase.find((user) => {
        return user.email === mail;
    });
}

function isEmailValid(email) {
    let reg = /^([a-zA-Z0-9\_\-\.]+)@([a-zA-Z0-9\_\-\.]+)\.([a-zA-Z]{2,5})$/;

    return reg.test(email);
}

const input = $('.input');


const signUser = () => {
    input.html(htmlComponents.userSign);

    let signBtn = $('.sign-btn');

    signBtn.on('click', function () {
        if ($('.sign-status').text() === 'Log In') {
            $('.sign-btn').text('Log In');
            $('.sign-status').text('Sign Up');
            $('.name-display').show();
        }
        else {
            $('.sign-btn').text('Sign Up');
            $('.sign-status').text('Log In');
            $('.name-display').hide();
        }
    });

    $('input[type="submit"]').on('click', function () {
        if ($('.sign-status').text() === 'Sign Up') {
            if (!isLogin) {
                let name = $('.input-name').val();
                let email = $('.input-email').val();
                let password = $('.input-password').val();
                let id = $('.input-id').val();

                if (!isEmailValid(email)) {
                    alert('invalid email');
                }
                else if (hasUser(email)) {
                    input.html(htmlComponents.userMsg('Sorry, that email is already taken'));

                    $('.ok-btn').on('click', function () {
                        signUser();
                    })
                }
                else {
                    input.html(htmlComponents.userMsg('Thank you for your registration, welcome!'));
                    createUser(name, email, password, id);
                    console.log(userDatabase);

                    $('.ok-btn').on('click', function () {
                        signUser();
                    })
                }
            }
        }
        else {
            let email = $('.input-email').val();
            let password = $('.input-password').val();

            if (!isLogin) {
                if (hasUser(email)) {
                    let user = getUser(email);
                    if (user.password === password) {
                        mailLoggedIn = user.email;
                        isLogin = true;

                        input.html(htmlComponents.userMsg(`Welcome, ${user.name}`));

                        $('.ok-btn').on('click', function () {
                            page(user);
                        })

                        console.log(mailLoggedIn);
                        console.log(isLogin);
                    }
                    else {
                        alert('Your email or password is incorrect');
                        $('.input-email').val('');
                        $('.input-password').val('');
                    }
                    
                }
                else {
                    input.html(htmlComponents.userMsg('We don\'t have that account'));

                    $('.ok-btn').on('click', function () {
                        signUser();
                    })
                }
            }
        }

    })

}

signUser();


const page = (user) => {
    input.html(htmlComponents.userProfile(user))
}









// // main file:
// // ==========

// import * as htmlComponents from "html.js"

// const addhtml = () => {
//   document.body.appendChild(htmlComponents.example)
//   document.getElementById("example").addEventListener() // etc
// }

// // --------------
// // other file: html.js

// export const example = `<div id="example"></div>`;


