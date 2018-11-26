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
        this.ACCOUNT_DOESNOT_EXIST_ALERT = 'Account does not exist.\n'
        this.ACCOUNT_ADDED_ALERT = 'Account was added.\n';
        this.FILE_EXCEED_ALERT = 'File size exceeds account capacity.\n'
        this.FILE_EXIST_ALERT = 'File already exists in the account.\n';
        this.FILE_UPLOAD_SUCCESS = 'File uploaded into account.\n';
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

    checkStorage(account, size) {
        if (this.getUser(account).storage > size) {
            return true;
        }
    }

    createAccount(email, type, storage) {
        this.userDatabase.push(new Account(email, type, storage));
    }


    // Function to ask user input
    askUser() {
        let userInput = prompt(this.USER_INPUT);

        switch (userInput) {
            case 'ADD':
                let mailInput = prompt(this.MAIL_INPUT);
                let typeInput = prompt(this.TYPE_INPUT);

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
                let nameAccount = prompt(this.MAIL_INPUT);
                let nameFile = prompt(this.FILE_INPUT);
                let fileSize = parseInt(prompt(this.SIZE_INPUT));

                if(!this.hasUser(nameAccount)) {
                    alert(this.ACCOUNT_DOESNOT_EXIST_ALERT);
                }
                else if(this.hasFile(nameFile, nameAccount)) {
                    alert(this.FILE_EXIST_ALERT);
                }
                else if (!this.checkStorage(nameAccount, fileSize)) {
                    alert(this.FILE_EXCEED_ALERT);
                }
                else {
                    let obj = this.getUser(nameAccount);
                    obj['storage'] -= fileSize;
                    this.fileDatabase.push(new File(nameFile,fileSize,nameAccount));

                    console.log(this.userDatabase);
                    console.log(this.fileDatabase);
                    alert(this.FILE_UPLOAD_SUCCESS);
                }

                break;

            case 'SHARE':
                console.log('you are in SHARE Menu')
                break;

            case 'MINSPACE':

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