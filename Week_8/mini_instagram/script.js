
// CONSTRUCTOR FUNCTIONS
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.followers = 0;
        this.following = 0;
    }
}

class Instagram {

    constructor() {
        // VARIABLES USED IN askUser()
        this.userDatabase = [];
        this.isLogin = false;
        this.mailLoggedIn = '';


        // ALERT VARIABLES
        this.USER_INPUT = 'Insert your input';

        this.NAME_INPUT = 'Insert your name';
        this.MAIL_INPUT = 'Insert your mail';
        this.PASSWORD_INPUT = 'Insert your input';

        this.PASSWORD_ALERT = 'The password is incorrect\n';
        this.ACCOUNT_ALERT = 'We don\'t have that account\n';
        this.LOGGEDIN_ALERT = 'You are already logged in\n';
        this.USER_LOGGEDIN = 'Sorry, you have to be logged in to use that functionality\n';
        this.REGIST_WELCOME = 'Thank you for your registration, welcome!\n';
        this.LOGGEDOUT_ALERT = 'You logged out, see you later\n';
        this.QUERY_ALERT = 'We have no results for that query\n';
        this.NOT_EXIST_ALERT = 'That user does not exist\n';
        this.OPTION_ALERT = 'We don\'t have that option\n';
        this.EXIT_ALERT = 'You left the program, bye'
    }

    // MAIN FUNCTIONS

    isEmailValid(email) {
        let reg = /^([a-zA-Z0-9\_\-\.]+)@([a-zA-Z0-9\_\-\.]+)\.([a-zA-Z]{2,5})$/;

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

    // SWITCH FUNCTIONS

    loginUser() {
        if (!this.isLogin) {
            let userEmail = prompt(this.MAIL_INPUT).trim();
            let userPass = prompt(this.PASSWORD_INPUT);
            if (this.hasUser(userEmail)) {
                let user = this.getUser(userEmail);
                if (user.password === userPass) {
                    this.mailLoggedIn = user.email;
                    this.isLogin = true;
                    alert(`Welcome, ${user.name}.\n`)
                    console.log(this.isLogin);
                    console.log(this.mailLoggedIn);
                }
                else {
                    alert(this.PASSWORD_ALERT);
                }
            }
            else {
                alert(this.ACCOUNT_ALERT);
            }
        }
        else {
            alert(this.LOGGEDIN_ALERT)
        }
    }

    signupUser() {
        if (!this.isLogin) {
            let name = prompt(this.NAME_INPUT);
            let email = prompt(this.MAIL_INPUT).trim();

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
                alert(this.REGIST_WELCOME);
            }

        }
        else {
            alert(this.LOGGEDIN_ALERT)
        }
    }

    searchUser() {
        if (this.isLogin) {
            let searchEmail = prompt('Search email').trim();
            if (this.hasUser(searchEmail)) {
                let data = this.getUser(searchEmail)
                alert(data['name']);
                alert(data['email']);
                alert('Followers: ' + data['followers']);
                alert('Following: ' + data['following'] + '\n');

            }
            else {
                alert(this.QUERY_ALERT)
            }
        }
        else {
            alert(this.USER_LOGGEDIN)
        }
    }

    logoutUser() {
        if (this.isLogin) {
            this.isLogin = false;
            this.mailLoggedIn = '';
            alert(this.LOGGEDOUT_ALERT);

        }
        else {
            alert(this.USER_LOGGEDIN)
        }
    }

    followUser() {
        if (this.isLogin) {
            let userFollow = prompt(this.MAIL_INPUT).trim();

            if (this.hasUser(userFollow)) {
                let followedUser = this.getUser(userFollow);
                let followingUser = this.getUser(this.mailLoggedIn);

                followedUser.followers += 1;
                followingUser.following += 1;

                console.dir(followedUser);
                console.dir(followingUser);

                alert(`You now follow ${followedUser.name}\n`)
            }
            else {
                alert(this.NOT_EXIST_ALERT);
            }

        }

        else {
            alert(this.USER_LOGGEDIN)
        }
    }

    // Function to ask user input
    askUser() {

        this.userInput = prompt(this.USER_INPUT);

        switch (this.userInput) {

            case 'log in':

                this.loginUser();

                break;

            case 'sign up':

                this.signupUser();

                break;

            case 'search':

                this.searchUser();

                break;

            case 'log out':

                this.logoutUser();

                break;

            case 'follow':

                this.followUser();

                break;

            case 'exit':

                alert(this.EXIT_ALERT);
                return;

            default:
                alert(this.OPTION_ALERT);
        }

        return this.askUser();
    }


}


let app = new Instagram();
app.askUser();