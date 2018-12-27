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
        this.followers = [];
        this.following = [];
        this.urlImages = []
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

createUser('Mário Prada','m@teste.com', '1', '1224');
createUser('Cláudia Silva','c@teste.com', '1', '1224');

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
    input.html(htmlComponents.userProfile(user));
    let mainUser = getUser(user.email);

   
    let visitPage = mainUser.email;

    //Search
    $('.btns-search').on('click', function() {
        let findEmail = $('.email-search').val();
        console.log(findEmail); 
        if(!hasUser(findEmail)) {
            alert('We have no results for that query');
            $('.email-search').val('');
        }
        else {
            let user = getUser(findEmail);

            visitPage = user.email;

            page(user);

            $('.publish-field').hide();            
        }
    });


    //Publish

    $('.publish-btn').on('click', function() {
        let url = $('.url-photo').val();
        let description = $('.user-description').val();

        mainUser.urlImages.unshift([url,description]);

        $('.url-photo').val('');
        $('.user-description').val('');

        page(mainUser)
    })

    //Follow Person
    $('.follow-btn').on('click', function() {
        let followingUser = getUser(mailLoggedIn);
        let followerUser = getUser(visitPage);

        if (followingUser.following.includes(followerUser.email)) {
            input.html(htmlComponents.userMsg(`YEY! You already follow ${followerUser.name}`));
        }
        else {
            followingUser.following.push(followerUser.email);
            followerUser.followers.push(followingUser.email);
            input.html(htmlComponents.userMsg(`You now follow ${followerUser.name}`));
        }

        $('.ok-btn').on('click', function () {
            page(followerUser);
            $('.publish-field').hide();  
        })

    })

    //My Profile
    $('.profile-btn').on('click', function() {
        page(getUser(mailLoggedIn))
    })

    //Log Out
    $('.logout-btn').on('click', function() {
         isLogin = false;
         mailLoggedIn = '';

         signUser();
    })

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


