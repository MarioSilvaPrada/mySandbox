// function alert(msg) {
//     console.log(msg);
// }

// function prompt(msg, input) {
//     console.log(msg);
//     return input;
// }

class File {
    constructor(name, size, account) {
        this.name = name;
        this.size = size;
        this.account = account;
        this.isShared = false;
    }
}

class Account {
    constructor(email) {
        this.email = email;
    }
}

class Premium extends Account {
    constructor(email) {
        super(email)
        this.storage = 5124;
    }
}

class Basic extends Account {
    constructor(email) {
        super(email)
        this.storage = 2048;
    }
}



class Cloud {
    constructor() {
        this.userDatabase = [];
        this.fileDatabase = [];

        this.USER_INPUT = 'Insert your input';
        this.MAIL_INPUT = 'Insert your mail';
        this.TYPE_INPUT = 'What type of account do you have?';
        this.FILE_INPUT = 'Insert File Name';
        this.SIZE_INPUT = 'What is the size of the file?\n';

        this.ACCOUNT_EXISTS_ALERT = 'Account already exists.\n';
        this.ACCOUNT_DOESNOT_EXIST_ALERT = 'Account does not exist.\n';
        this.ACCOUNT_ADDED_ALERT = 'Account was added.\n';
        this.FILE_EXCEED_ALERT = 'File size exceeds account capacity.\n';
        this.FILE_EXIST_ALERT = 'File already exists in the account.\n';
        this.FILE_DOESNOT_EXIST_ALERT = 'File does not exist.\n';
        this.FILE_UPLOAD_SUCCESS = 'File uploaded into account.\n';
        this.ACCOUNT_NOTALLOWED_ALERT = 'Account does not allow file sharing.\n';
        this.ALREADY_SHARED_ALERT = 'File already shared.\n';
        this.SUCCESS_SHARED_ALERT = 'File was shared.\n';
        this.NOACCOUNT_ALERT = 'No accounts.\n'
    }

    // MAIN FUNCTIONS 

    hasUser(email) {
        return this.userDatabase.findIndex((user) => {
            return user.email === email;
        }) !== -1;
    }

    getUser(email) {
        return this.userDatabase.find((user) => {
            return user.email === email;
        });
    }

    hasFile(name, account) {
        return this.fileDatabase.findIndex((file) => {
            return file.name === name && file.account === account;
        }) !== -1
    }

    getFile(fileName) {
        return this.fileDatabase.find((file) => {
            return file.name === fileName
        })
    }

    checkStorage(account, size) {
        if (this.getUser(account).storage > size) {
            return true;
        }
    }

    createAccount(email, type, storage) {
        this.userDatabase.push(new Account(email, type, storage));
    }

    isPremium(email) {
        if (this.getUser(email) instanceof Premium) {
            return true;
        }
    }

    isShared(file) {
        if (this.getFile(file).isShared) {
            return true;
        }
    }

    // storageSort() {
    //     this.userDatabase.sort((a, b) => {
    //         a.storage < b.storage ? 1 : -1;
    //     })
    // }


    // Function to ask user input
    askUser() {
        let userInput = prompt(this.USER_INPUT);
        let split = userInput.split(' ');
        let mainInput = split[0].toUpperCase();


        switch (mainInput) {
            case 'ADD':
                let mailInput = split[1];
                let typeInput = split[2];

                if (this.hasUser(mailInput)) {
                    alert(this.ACCOUNT_EXISTS_ALERT);
                }
                else {
                    typeInput === 'premium' ? this.userDatabase.push(new Premium(mailInput)) : this.userDatabase.push(new Basic(mailInput))
                    alert(this.ACCOUNT_ADDED_ALERT);
                    console.log(this.userDatabase);
                }
                break;


            case 'UPLOAD':
                let nameAccount = split[1];
                let nameFile = split[2];
                let fileSize = split[3];

                if (!this.hasUser(nameAccount)) {
                    alert(this.ACCOUNT_DOESNOT_EXIST_ALERT);
                }
                else if (this.hasFile(nameFile, nameAccount)) {
                    alert(this.FILE_EXIST_ALERT);
                }
                else if (!this.checkStorage(nameAccount, fileSize)) {
                    alert(this.FILE_EXCEED_ALERT);
                }
                else {
                    let obj = this.getUser(nameAccount);
                    obj['storage'] -= fileSize;
                    this.fileDatabase.push(new File(nameFile, fileSize, nameAccount));

                    console.log(this.userDatabase);
                    console.log(this.fileDatabase);
                    alert(this.FILE_UPLOAD_SUCCESS);
                }

                break;

            case 'SHARE':
                let accountName = split[1]
                let nameShareAccount = split[2];
                let fileName = split[3];

                if (!this.hasUser(accountName) || !this.hasUser(nameShareAccount)) {
                    alert(this.ACCOUNT_DOESNOT_EXIST_ALERT);
                }
                else if (!this.hasFile(fileName, accountName)) {
                    alert(this.FILE_DOESNOT_EXIST_ALERT);
                }
                else if (!this.isPremium(accountName)) {
                    alert(this.ACCOUNT_NOTALLOWED_ALERT);
                }
                else if (this.isShared(fileName)) {
                    alert(this.ALREADY_SHARED_ALERT);
                }
                else if (!this.checkStorage(nameShareAccount, this.getFile(fileName).size)) {
                    alert(this.FILE_EXCEED_ALERT)
                }
                else {
                    let fileObj = this.getFile(fileName);
                    fileObj.isShared = true;

                    if (!this.isPremium(nameShareAccount)) {
                        this.getUser(nameShareAccount).storage -= fileObj.size / 2;
                    }

                    alert(this.SUCCESS_SHARED_ALERT);
                    console.log(this.userDatabase);
                    console.log(this.fileDatabase);
                }

                break;

            case 'MINSPACE':

                if (this.userDatabase.length = 0) {
                    alert(this.NOACCOUNT_ALERT);
                }
                else {
                    let objSort = '';
                    for (let i = 0; i < this.userDatabase.length; i++) {
                        objSort = this.userDatabase[0];
                        if (this.userDatabase[i]['storage'] <= objSort['storage']) {
                            objSort = this.userDatabase[i];
                        }
                    }

                    alert(`Account with least free space: ${objSort['email']}`);
                }

                break;

            case 'LISTFILES':

                break;

            case 'LISTALL':

                break;

            case 'EXIT':

                return;

            case 'UPDATE':

                break;

            case 'LASTUPDATE':

                break;

        }

        return this.askUser();
    }
}

let app = new Cloud();
app.askUser();