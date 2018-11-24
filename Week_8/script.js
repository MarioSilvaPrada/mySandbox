// ALERT VARIABLES

const USER_INPUT = 'Insert your input';

const NAME_INPUT = 'Insert your name';
const MAIL_INPUT = 'Insert your mail';
const PASSWORD_INPUT = 'Insert your input';

const PASSWORD_ALERT = 'The password is incorrect\n';
const ACCOUNT_ALERT = 'We don\'t have that account\n';
const LOGGEDIN_ALERT = 'You are already logged in\n';
const USER_LOGGEDIN = 'Sorry, you have to be logged in to use that functionality\n';
const REGIST_WELCOME = 'Thank you for your registration, welcome!\n';
const LOGGEDOUT_ALERT = 'You logged out, see you later\n';
const QUERY_ALERT = 'We have no results for that query\n';
const NOT_EXIST_ALERT = 'That user does not exist\n';
const OPTION_ALERT = 'We don\'t have that option\n';


// CONSTRUCTOR FUNCTIONS

class Instagram {
    
    constructor() {
        this.userDatabase = [];
    }

    isEmailValid(email) {
        var reg = /^([a-zA-Z0-9\_\-\.]+)@([a-zA-Z0-9\_\-\.]+)\.([a-zA-Z]{2,5})$/;

        return reg.test(email);

    }

    hasUser(mailUser) {
        return this.userDatabase.findIndex((user) => {
            return user.email === mailUser;
        }) !== -1;
       
    }

    createUser(name, email, password) {
        this.userDatabase.push(new User(name, email, password));
    }

    getUser(mail) {
        return this.userDatabase.find((user) => {
            return user.email === mail;
        });
    }

    ask() {
        let userInput = prompt(USER_INPUT);
        let isLogin = false;
        let mailLoggedIn = '';

        while (userInput !== 'exit') {


            switch (userInput) {

                case 'log in':

                    if (!isLogin) {
                        let userEmail = prompt(MAIL_INPUT).trim();
                        let userPass = prompt(PASSWORD_INPUT);
                        if (this.hasUser(userEmail)) {
                            let user = this.getUser(userEmail);
                            if (user.password === userPass) {
                                mailLoggedIn = user.email;
                                isLogin = true;
                                alert(`Welcome, ${user.name}.\n`)
                                console.log(isLogin);
                                console.log(mailLoggedIn);
                            }
                            else {
                                alert(PASSWORD_ALERT);
                            }
                        }
                        else {
                            alert(ACCOUNT_ALERT);
                        }
                    }
                    else {
                        alert(LOGGEDIN_ALERT)
                    }

                    break;

                case 'sign up':

                    if (!isLogin) {
                        let name = prompt(NAME_INPUT);
                        let email = prompt(MAIL_INPUT).trim();

                        while (!this.isEmailValid(email) && email !== 'exit*') {
                            alert('Insert a valid email\n');
                            email = prompt('Insert email');
                        }

                        while (this.hasUser(email) && email !== 'exit*') {
                            alert('Sorry, that email is already taken\n');
                            email = prompt('Insert email');
                        }


                        if (email !== 'exit*') {
                            let password = prompt('Insert password');
                            this.createUser(name, email, password);
                            console.dir(this.userDatabase)
                            alert(REGIST_WELCOME);

                        }

                    }
                    else {
                        alert(LOGGEDIN_ALERT)
                    }


                    break;
                case 'search':


                    if (isLogin) {
                        let searchEmail = prompt('Search email').trim();
                        if (this.hasUser(searchEmail)) {
                            let data = this.getUser(searchEmail)
                            alert(data['name']);
                            alert(data['email']);
                            alert('Followers: ' + data['followers']);
                            alert('Following: ' + data['following'] + '\n');

                        }
                        else {
                            alert(QUERY_ALERT)
                        }
                    }
                    else {
                        alert(USER_LOGGEDIN)
                    }

                    break;
                case 'log out':
                    if (isLogin) {
                        isLogin = false;
                        mailLoggedIn = '';
                        alert(LOGGEDOUT_ALERT);

                    }
                    else {
                        alert(USER_LOGGEDIN)
                    }


                    break;
                case 'follow':
                    if (isLogin) {
                        let userFollow = prompt(MAIL_INPUT).trim();

                        if (this.hasUser(userFollow)) {
                            let followedUser = this.getUser(userFollow);
                            let followingUser = this.getUser(mailLoggedIn);

                            followedUser.followers += 1;
                            followingUser.following += 1;

                            console.dir(followedUser);
                            console.dir(followingUser);

                            alert(`You now follow ${followedUser.name}\n`)
                        }
                        else {
                            alert(NOT_EXIST_ALERT);
                        }

                    }

                    else {
                        alert(USER_LOGGEDIN)
                    }

                    break;
                default:
                    alert(OPTION_ALERT);
            }

            userInput = prompt(USER_INPUT);
        }

        alert('You left the program, bye');
    }
}

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.followers = 0;
        this.following = 0;

    }
}

let app = new Instagram();
app.ask();