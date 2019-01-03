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
        this.urlImages = [];
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

//Grab place where we will inject HTML
const input = $('.input');


const signUser = () => {
    input.html(htmlComponents.userSign);

    let signBtn = $('.sign-btn');

    signBtn.on('click', function () {
        if ($('.sign-status').text() === 'Log In') {
            //clear fields
            $('.input-name').val('');
            $('.input-email').val('');
            $('.input-password').val('');
            $('.input-id').val('');

            $('.sign-btn').text('Log In');
            $('.sign-status').text('Sign Up');
            $('.name-display').show();
        }
        else {
            //clear fields
            $('.input-email').val('');
            $('.input-password').val('');

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
                    userMessage('Sorry, that email is already taken');

                    $('.ok-btn').on('click', function () {
                        signUser();
                    })
                }
                else {
                    userMessage('Thank you for your registration, welcome!');
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

                        userMessage(`Welcome, ${user.name}`);

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
                    userMessage('We don\'t have that account');

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
            userMessage('We have no results for that query');
            

            $('.ok-btn').on('click', function () {
                page(getUser(mailLoggedIn)); 
            })
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
            userMessage(`YEY! You already follow ${followerUser.name}`);
        }
        else {
            followingUser.following.push(followerUser.email);
            followerUser.followers.push(followingUser.email);
            userMessage(`You now follow ${followerUser.name}`);
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

};

const userMessage = (msg) => {
    input.html(htmlComponents.userMsg(msg));
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