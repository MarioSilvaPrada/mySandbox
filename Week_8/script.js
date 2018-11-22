function askUser() {
    let userInput = prompt('User input!');
    let database = [];
    let mailLogIn = null;

    while (userInput !== 'exit') {



        function User(name, email, password) {
            this.name = name;
            this.email = email;
            this.password = password;
            this.isLogin = false;
            this.followers = 0;
            this.following = 0;
        }

        const isEmailValid = (mailUser) => {
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

        const checkUserPassword = (mailUser, passUser) => {
            let validate = false;
            for (db of database) {
                if (db['email'] === mailUser && db['password'] === passUser) {
                    return true;
                }
                else {
                    return false;
                }
            }

            if (validate) {
                return true;
            }
            else {
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

        const isUserLogIn = (mail) => {
            for (db of database) {
                if (db['email'] === mail) {
                    return db['isLogin']
                }
            }
        }

        switch (userInput) {

            case 'log in':

                let userEmail = prompt('Email input');
                let userPass = prompt('Password input');

                if (isEmailValid(userEmail)) {
                    if (checkUserPassword(userEmail, userPass)) {
                        let userName = null;
                        for (db of database) {
                            if (db['email'] === userEmail) {
                                userName = db['name'];
                                db['isLogin'] = true; //turn user login true
                                mailLogIn = userEmail; // set email to Logged in
                            }
                        }
                        alert(`Welcome ${userName}`);
                        console.log(database);
                    }
                    else {
                        alert('The password is incorrect')
                    }
                }
                else {
                    alert('We don\'t have that account')
                }

                break;
            case 'sign up':
                let name = prompt('insert your name');
                let email = prompt('Insert email');
                let password = prompt('Insert password');

                const mailValidation = () => {
                    var re = /^([a-zA-Z0-9\_\-\.]+)@([a-zA-Z0-9\_\-\.]+)\.([a-zA-Z]{2,5})$/;

                    if (re.test(email)) {
                        return true;
                    } else {
                        return false;
                    }
                }

                while (!mailValidation() && email !== 'exit*') {
                    alert('Insert valid email');
                    email = prompt('Insert email');
                    mailValidation();
                }

                while (isEmailValid(email) && email !== 'exit*') {
                    alert('Sorry, that email is already taken');
                    email = prompt('Insert email');
                    isEmailValid();
                }

                //    PONTO 4 EM FALTA


                if (email !== 'exit*') {
                    createUser(name, email, password)
                }

                console.dir(database);
                alert('Thank you for your registration, welcome!');


                break;
            case 'search':
                let searchEmail = prompt('Search email');

                if (isUserLogIn(mailLogIn)) {
                    if (isEmailValid(searchEmail)) {
                        let data = getUser(searchEmail)
                        alert(data['name']);
                        alert(data['email']);
                        alert('Followers: ' + data['followers']);
                        alert('Following: ' + data['following']);

                    }
                    else {
                        alert('We have no results for that query')
                    }
                }
                else {
                    alert('Sorry, you have to be logged in to use that functionality')
                }

                break;
            case 'log out':
                if (isUserLogIn(mailLogIn)) {
                    alert('You logged out, see you later');
                }
                else {
                    alert('Sorry, you have to be logged in to use that functionality')
                }


                break;
            case 'follow':
            // code here;
            default:
                alert('we don\'t have that option');
        }

        userInput = prompt('User input!');
    }

    alert('You left the program, bye');

}

askUser()