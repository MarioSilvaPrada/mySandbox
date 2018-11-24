
let userInput = prompt('User input!');
let database = [];
let isLogin = false;
let mailLoggedIn = '';

while (userInput !== 'exit') {


    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.followers = 0;
        this.following = 0;
    }

    const hasUser = (mailUser) => {
        let validEmail = false;
        for (db of database) {
            if (db['email'] === mailUser) {
                validEmail = true;
            }
        }

        if (validEmail) {
            return true;
        }
        else {
            return false;
        }
    }

    const isEmailValid = (email) => {
        var re = /^([a-zA-Z0-9\_\-\.]+)@([a-zA-Z0-9\_\-\.]+)\.([a-zA-Z]{2,5})$/;

        if (re.test(email)) {
            return true;
        } else {
            return false;
        }
    }

    const createUser = (name, email, password) => {
        database.push(new User(name, email, password));
    }

    const getUser = (mail) => {
        for (db of database) {
            if (db['email'] === mail) {
                return db;
            }
        }
    }

    //checks if user is login  TRUE or FALSE
    const isUserLogIn = (mail) => {
        for (db of database) {
            if (db['email'] === mail) {
                return db['isLogin']
            }
        }
    }

    switch (userInput) {

        case 'log in':

            let userEmail = prompt('Email input').trim();
            let userPass = prompt('Password input');

            if (!hasUser(userEmail)) {
                alert('We don\'t have that account\n')
            }
            else if (mailLoggedIn) {
                alert('You are already logged in');
            }
            else {
                let user = getUser(userEmail);
                if (user.password === userPass) {
                    mailLoggedIn = user.email;
                    isLogin = true;
                    alert(`Welcome, ${user.name}.\n`)
                    console.log(isLogin);
                    console.log(mailLoggedIn);
                }
                else {
                    alert('The password is incorrect\n')
                }

                console.log(database);
            }


            break;

        case 'sign up':
            let name = prompt('insert your name');
            let email = prompt('Insert email').trim();

            while (!isEmailValid(email) && email !== 'exit*') {
                alert('Insert a valid email\n');
                email = prompt('Insert email');
                isEmailValid(email);
            }

            while (hasUser(email) && email !== 'exit*') {
                alert('Sorry, that email is already taken\n');
                email = prompt('Insert email');
                hasUser(email);
            }

            while (isLogin) {
                alert('log out first before you create a new account\n');
            }

            let password = prompt('Insert password');
            if (email !== 'exit*') {
                createUser(name, email, password)
            }

            console.dir(database);
            alert('Thank you for your registration, welcome!\n');


            break;
        case 'search':


            if (isLogin) {
                let searchEmail = prompt('Search email').trim();
                if (hasUser(searchEmail)) {
                    let data = getUser(searchEmail)
                    alert(data['name']);
                    alert(data['email']);
                    alert('Followers: ' + data['followers']);
                    alert('Following: ' + data['following'] + '\n');

                }
                else {
                    alert('We have no results for that query\n')
                }
            }
            else {
                alert('Sorry, you have to be logged in to use that functionality\n')
            }

            break;
        case 'log out':
            if (isLogin) {
                isLogin = false;
                mailLoggedIn = '';
                alert('You logged out, see you later\n');

            }
            else {
                alert('Sorry, you have to be logged in to use that functionality\n')
            }


            break;
        case 'follow':
            if (isLogin) {
                let userFollow = prompt('Insert email').trim();

                if (hasUser(userFollow)) {
                    let followedUser = getUser(userFollow);
                    let followingUser = getUser(mailLoggedIn);

                    followedUser.followers += 1;
                    followingUser.following += 1;

                    console.dir(followedUser);
                    console.dir(followingUser);

                    alert(`You now follow ${followedUser.name}\n`)
                }
                else {
                    alert('That user does not exist\n');
                }

            }

            else {
                alert('Sorry, you have to be logged in to use that functionality\n')
            }

            break;
        default:
            alert('We don\'t have that option\n');
    }

    userInput = prompt('User input!');
}

alert('You left the program, bye');
