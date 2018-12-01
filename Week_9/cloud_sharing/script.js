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
        this.sharedAccounts = [];
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
        this.SIZE_INPUT = 'What is the size of the file?';

        this.ACCOUNT_EXISTS_ALERT = 'Account already exists.';
        this.ACCOUNT_DOESNOT_EXIST_ALERT = 'Account does not exist.';
        this.ACCOUNT_ADDED_ALERT = 'Account was added.';
        this.FILE_EXCEED_ALERT = 'File size exceeds account capacity.';
        this.FILE_EXIST_ALERT = 'File already exists in the account.';
        this.FILE_DOESNOT_EXIST_ALERT = 'File does not exist.';
        this.FILE_UPLOAD_SUCCESS = 'File uploaded into account.';
        this.ACCOUNT_NOTALLOWED_ALERT = 'Account does not allow file sharing.';
        this.ALREADY_SHARED_ALERT = 'File already shared.';
        this.SUCCESS_SHARED_ALERT = 'File was shared.';
        this.NOACCOUNT_ALERT = 'No accounts.'
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

    getFile(account,fileName) {
        return this.fileDatabase.find((file) => {
            return file.account === account && file.name === fileName;
        })
    }

    checkStorage(account, size) {
        if (this.getUser(account).storage >= size) {
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

    // acrescentar terceiro argumento main account
    isShared(account, sharedaccount, fileName) {
        let fileObj = this.getFile(account, fileName);
           return fileObj['sharedAccounts'].includes(sharedaccount);
    }

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
                    alert('');
                }
                else {
                    typeInput === 'premium' ? this.userDatabase.push(new Premium(mailInput)) : this.userDatabase.push(new Basic(mailInput))
                    alert(this.ACCOUNT_ADDED_ALERT);
                    alert('');
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
                    alert('');
                }
                else if (!this.checkStorage(nameAccount, fileSize)) {
                    alert(this.FILE_EXCEED_ALERT);
                    alert('');
                }
                else {
                    let obj = this.getUser(nameAccount);
                    obj['storage'] -= fileSize;
                    this.fileDatabase.push(new File(nameFile, fileSize, nameAccount));

                    console.log(this.userDatabase);
                    console.log(this.fileDatabase);
                    alert(this.FILE_UPLOAD_SUCCESS + '\n');
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
                else if (this.isShared(accountName, nameShareAccount, fileName)) {
                    alert(this.ALREADY_SHARED_ALERT);
                    alert('');
                }
                else {
                    let fileObj = this.getFile(accountName, fileName);

                    if (!this.isPremium(nameShareAccount)) {
                        if (!this.checkStorage(nameShareAccount, fileObj.size / 2)) {
                            alert(this.FILE_EXCEED_ALERT);
                            alert('');
                        }
                        else {
                            this.getUser(nameShareAccount).storage -= fileObj.size / 2;
                            fileObj.sharedAccounts.push(nameShareAccount);
                            fileObj.isShared = true;

                            alert(this.SUCCESS_SHARED_ALERT);
                            alert('');
                        }
                    }
                    else {
                        fileObj.sharedAccounts.push(nameShareAccount);
                        fileObj.isShared = true;

                        alert(this.SUCCESS_SHARED_ALERT);
                        alert('');
                    }
                    console.log(this.userDatabase);
                    console.log(this.fileDatabase);
                }

                break;

            case 'MINSPACE':

                if (this.userDatabase.length < 1) {
                    alert(this.NOACCOUNT_ALERT + '\n');
                }
                else {
                    let objSort = '';
                    for (let i = 0; i < this.userDatabase.length; i++) {
                        objSort = this.userDatabase[0];
                        if (this.userDatabase[i]['storage'] < objSort['storage']) { 
                            objSort = this.userDatabase[i];
                        }
                    }
                    alert(`Account with least free space: ${objSort['email']} \n`);
                }

                break;

            case 'LISTFILES':
                let userAccount = split[1];

                if (!this.hasUser(userAccount)) {
                    alert(this.ACCOUNT_DOESNOT_EXIST_ALERT)
                }
                else {
                    alert('Account files:');
                    for (let i = 0; i < this.fileDatabase.length; i++) {
                        if (this.fileDatabase[i]['account'] === userAccount) {
                            alert(`${this.fileDatabase[i]['name']} (${this.fileDatabase[i]['size']} MB)`);
                        }
                    }
                    for (let i = 0; i < this.fileDatabase.length; i++) {
                        if (this.fileDatabase[i]['sharedAccounts'].includes(userAccount)) {
                            alert(`${this.fileDatabase[i]['name']} (${this.fileDatabase[i]['size']} MB) (shared)`);
                        }
                    }
                    alert('');
                }

                break;

            case 'LISTALL':

                alert('All accounts:');

                for (let i = 0; i < this.userDatabase.length; i++) {
                    alert(`${this.userDatabase[i]['email']} (${this.userDatabase[i].constructor.name})`);

                }
                alert('');

                break;

            case 'EXIT':
                alert('Exiting...' + '\n');
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