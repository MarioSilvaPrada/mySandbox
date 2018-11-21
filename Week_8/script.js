function askUser() {
    let userInput = prompt('User input!');

    while (userInput !== 'exit') {

        let database = [];

        function User(name, email, password) {
            this.name = name;
            this.email = email;
            this.password = password;
        }

        const databaseValidation = (mailUser) => {
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

        switch (userInput) {

            case 'log in':
                
            let userEmail = prompt('Email input');
            let userPass = prompt('Password input');

            if (databaseValidation(userEmail)) {
                if (checkUserPassword(userEmail, userPass)) {
                    let userName = null;
                    for (db of database) {
                        if (db['email'] === userEmail) {
                            userName = db['name'];
                        }
                    }
                    alert(`Welcome ${userName}`);
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

                while (databaseValidation(email) && email !== 'exit*') {
                    alert('Sorry, that email is already taken');
                    email = prompt('Insert email');
                    databaseValidation();
                }

                //    PONTO 4 EM FALTA



                database.push(new User(name, email, password));
                alert('Thank you for your registration, welcome!');

                break;
            case 'exit':
                alert('You left the program, bye');
                break;
            case 'search':
                // code here;
                break;
            case 'log out':
                // code here;
                break;
            case 'follow':
            // code here;
            default:
                alert('we don\'t have that option');
        }

        userInput = prompt('User input!');
    }

}

askUser()