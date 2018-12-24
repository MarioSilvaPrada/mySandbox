import * as htmlComponents from './module.js';



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


const addHtml = () => {
    input.html(htmlComponents.userSign);

    let signBtn = $('.sign-btn');
}

addHtml();




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


