/* alert/prompt plug for nodejs */
// counter function
// const __counter__ = () => {
//     let count = 0;
//     return () => { return count++; };
// }
// const __c__ = __counter__();
// // alert() / prompt() declarations
// const alert = console.log.bind(this);
// const prompt = msg => {
//     const i = __c__();
//     console.log(`${msg}\n ➡ ${__inputs__[i]}`);
//     return __inputs__[i];
// }
// prompt() inputs array
// Write the inputs to prompt() in your program

const __inputs__ = [
    ["ADD p1 premium", "LISTALL", "ADD b1 basic", "LISTALL", "ADD p2 premium", "ADD b2 basic", "LISTALL", "ADD b3 basic", "ADD p3 premium", "EXIT"]
    , ["ADD p1 premium", "ADD p2 premium", "LISTALL", "ADD b1 basic", "ADD b2 basic", "LISTALL", "UPLOAD p1 file1 1000", "UPLOAD p1 file2 640", "UPLOAD p1 file3 1230", "UPLOAD p1 file4 890", "UPLOAD p1 file5 1010", "LISTFILES p1", "UPLOAD b1 file1 1000", "UPLOAD b1 file2 250", "UPLOAD b1 file3 250", "LISTFILES b1", "UPLOAD p2 file1 1000", "UPLOAD p2 file2 950", "UPLOAD p2 file3 1120", "UPLOAD p2 file4 850", "UPLOAD p2 file5 990", "LISTFILES p2", "UPLOAD b1 file1 1000", "UPLOAD b1 file2 250", "UPLOAD b1 file3 250", "LISTFILES b1", "UPLOAD b2 file1 1040", "UPLOAD b2 file2 250", "UPLOAD b2 file3 250", "LISTFILES b2", "LISTALL", "EXIT"]
    , ["ADD p1 premium", "ADD p2 premium", "ADD b1 basic", "ADD b2 basic", "UPLOAD p1 file1 2000", "UPLOAD p1 file2 500", "UPLOAD p1 file3 1000", "UPLOAD p1 file4 1000", "UPLOAD p1 file5 500", "LISTFILES p1", "UPLOAD p2 file1 2000", "UPLOAD p2 file2 500", "UPLOAD p2 file3 1000", "UPLOAD p2 file4 1000", "UPLOAD p2 file5 500", "LISTFILES p2", "UPLOAD b1 file1 1000", "UPLOAD b1 file2 250", "UPLOAD b1 file3 250", "LISTFILES b1", "UPLOAD b2 file1 1040", "UPLOAD b2 file2 250", "UPLOAD b2 file3 250", "LISTFILES b2", "SHARE p1 p2 file1", "SHARE p1 p2 file2", "SHARE p1 p2 file3", "SHARE p1 p2 file4", "SHARE p1 p2 file5", "LISTFILES p2", "SHARE p1 b1 file5", "SHARE p2 b1 file5", "LISTFILES b1", "SHARE p1 b2 file2", "SHARE p2 b2 file2", "LISTFILES b2", "EXIT"]
    , ["MINSPACE", "ADD p1 premium", "ADD b1 basic", "ADD p2 premium", "ADD b2 basic", "MINSPACE", "UPLOAD p1 file1 1640", "UPLOAD p1 file2 640", "UPLOAD p1 file3 1230", "MINSPACE", "UPLOAD p2 file1 1950", "UPLOAD p2 file2 950", "UPLOAD p2 file3 1120", "MINSPACE", "UPLOAD b1 file1 1200", "UPLOAD b1 file2 250", "MINSPACE", "UPLOAD b2 file1 1250", "UPLOAD b2 file2 250", "MINSPACE", "SHARE p2 p1 file1", "SHARE p2 p1 file2", "SHARE p2 p1 file3", "MINSPACE", "SHARE p2 b1 file2", "SHARE p1 b2 file2", "MINSPACE", "EXIT"]
    , ["ADD b1 basic", "ADD p1 premium", "ADD p1 basic", "ADD p1 premium", "ADD b1 basic", "ADD p2 premium", "ADD p3 premium", "ADD b2 basic", "LISTALL", "EXIT"]
    , ["UPLOAD p1 file1 1000", "ADD p1 premium", "UPLOAD p1 file1 1000", "UPLOAD p1 file1 500", "UPLOAD p1 file2 7000", "LISTFILES p1", "UPLOAD b1 file1 500", "ADD b1 basic", "UPLOAD b1 file1 1000", "UPLOAD b1 file1 200", "UPLOAD b1 file2 3000", "LISTFILES b1", "EXIT"]
    , ["SHARE p1 p2 file1", "ADD p1 premium", "ADD b1 basic", "UPLOAD p1 file1 3000", "UPLOAD p1 file2 2000", "UPLOAD p1 file3 120", "LISTFILES p1", "UPLOAD b1 file1 1000", "UPLOAD b1 file2 500", "LISTFILES b1", "SHARE p2 p1 file1", "SHARE p1 p3 file1", "SHARE b1 p1 file1", "SHARE p1 b1 file1", "LISTFILES b1", "EXIT"]
    , ["ADD p1 premium", "UPLOAD p1 file1 1000", "LISTFILES p2", "EXIT"]
    , ["ADD p1 premium", "ADD p2 premium", "ADD b1 basic", "UPLOAD p1 file1.p1 1800", "LASTUPDATE p1 file1.p1", "UPLOAD p1 file2.p1 1500", "UPLOAD p2 file1.p2 2000", "UPLOAD p2 file2.p2 500", "LASTUPDATE p2 file2.p2", "UPLOAD b1 file1.b1 1000", "LASTUPDATE b1 file1.b1", "SHARE p1 p2 file1.p1", "SHARE p1 b1 file2.p1", "SHARE p2 b1 file2.p2", "UPDATE p1 p2 file1.p1", "UPDATE p2 p2 file2.p2", "UPDATE p2 b1 file2.p2", "LASTUPDATE p1 file1.p1", "LASTUPDATE p2 file2.p2", "LISTFILES p1", "LISTFILES p2", "LISTFILES b1", "EXIT"]
    , ["UPDATE p1 p2 file1", "ADD p1 premium", "ADD p2 premium", "UPLOAD p1 file1 1000", "UPLOAD p1 file2 1000", "LASTUPDATE p3 file1", "LASTUPDATE p2 file4", "UPDATE p1 p3 file1", "SHARE p1 p2 file1", "UPDATE p2 p2 file1", "ADD b1 basic", "LASTUPDATE b1 file2", "SHARE p1 b1 file3", "UPDATE b1 b1 file3", "UPDATE p1 b1 file2", "EXIT"]
][9];
/* --- */


class File {
    constructor(name, size, account) {
        this.name = name;
        this.size = size;
        this.account = account;
        this.isShared = false;
        this.sharedAccounts = [];
        this.lastUpdate = account;
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
        this.NOACCOUNT_ALERT = 'No accounts.';
        this.FILE_NOTSHARED_ALERT = 'File not shared.';
        this.FILE_UPDATED_ALERT = 'File was updated.'
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

    getFile(account, fileName) {
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

    isShared(account, sharedaccount, fileName) {
        // Needed to create first if statement to use this fucntion in lastupdate
        if (account === sharedaccount) {
            return this.hasFile(fileName, account)
        }
        else {
            let fileObj = this.getFile(account, fileName);
            return fileObj['sharedAccounts'].includes(sharedaccount);
        }
    }


    // SWITCH FUNCTIONS

    addUser(split) {
        let mailInput = split[1];
        let typeInput = split[2];

        if (this.hasUser(mailInput)) {
            alert(this.ACCOUNT_EXISTS_ALERT + '\n');
        }
        else {
            typeInput === 'premium' ? this.userDatabase.push(new Premium(mailInput)) : this.userDatabase.push(new Basic(mailInput))
            alert(this.ACCOUNT_ADDED_ALERT + '\n');

            console.log(this.userDatabase);
        }
    }

    uploadUser(split) {
        let nameAccount = split[1];
        let nameFile = split[2];
        let fileSize = split[3];

        if (!this.hasUser(nameAccount)) {
            alert(this.ACCOUNT_DOESNOT_EXIST_ALERT + '\n');
        }
        else if (this.hasFile(nameFile, nameAccount)) {
            alert(this.FILE_EXIST_ALERT + '\n');
        }
        else if (!this.checkStorage(nameAccount, fileSize)) {
            alert(this.FILE_EXCEED_ALERT + '\n');
        }
        else {
            let obj = this.getUser(nameAccount);
            obj['storage'] -= fileSize;
            this.fileDatabase.push(new File(nameFile, fileSize, nameAccount));

            alert(this.FILE_UPLOAD_SUCCESS + '\n');
        }
    }

    shareUser(split) {
        let accountName = split[1]
        let nameShareAccount = split[2];
        let fileName = split[3];

        // check if have both users
        if (!this.hasUser(accountName) || !this.hasUser(nameShareAccount)) {
            alert(this.ACCOUNT_DOESNOT_EXIST_ALERT + '\n');
        }
        //  check if does not has the file
        else if (!this.hasFile(fileName, accountName)) {
            alert(this.FILE_DOESNOT_EXIST_ALERT + '\n');
        }
        // check if account is not premium
        else if (!this.isPremium(accountName)) {
            alert(this.ACCOUNT_NOTALLOWED_ALERT + '\n');
        }
        // check if accoutn is already shared
        else if (this.isShared(accountName, nameShareAccount, fileName)) {
            alert(this.ALREADY_SHARED_ALERT + '\n');
        }
        else {
            let fileObj = this.getFile(accountName, fileName);
            // check if account that will receive file is premium
            if (!this.isPremium(nameShareAccount)) {
                // if is not premium
                // check if the account has enough space
                if (!this.checkStorage(nameShareAccount, fileObj.size / 2)) {
                    alert(this.FILE_EXCEED_ALERT + '\n');
                }
                else {
                    this.getUser(nameShareAccount).storage -= fileObj.size / 2;
                    fileObj.sharedAccounts.push(nameShareAccount);
                    fileObj.isShared = true;

                    alert(this.SUCCESS_SHARED_ALERT + '\n');
                }
            }
            // if account is premium
            else {
                fileObj.sharedAccounts.push(nameShareAccount);
                fileObj.isShared = true;

                alert(this.SUCCESS_SHARED_ALERT);
                alert('');
            }
        }

    }

    minspaceUser() {
        if (this.userDatabase.length < 1) {
            alert(this.NOACCOUNT_ALERT + '\n');
        }
        else {
            let objSort = this.userDatabase[0];
            for (let i = 0; i < this.userDatabase.length; i++) {

                if (this.userDatabase[i]['storage'] < objSort['storage']) {
                    objSort = this.userDatabase[i];
                }
            }
            alert(`Account with least free space: ${objSort['email']}\n`);
        }
    }

    listFilesUser(split) {
        let userAccount = split[1];

        if (!this.hasUser(userAccount)) {
            alert(this.ACCOUNT_DOESNOT_EXIST_ALERT + '\n')
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
    }

    listallUsers() {
        alert('All accounts:');

        for (let i = 0; i < this.userDatabase.length; i++) {
            alert(`${this.userDatabase[i]['email']} (${this.userDatabase[i].constructor.name})`);

        }
        alert('');
    }

    exitUser() {
        alert('Exiting...' + '\n');
    }

    updateUser(split) {
        let mainAccount = split[1];
        let updatedAccount = split[2];
        let userFile = split[3];

        if (!this.hasUser(mainAccount) || !this.hasUser(updatedAccount)) {
            alert(this.ACCOUNT_DOESNOT_EXIST_ALERT + '\n');
        }
        else if (!this.hasFile(userFile, mainAccount)) {
            alert(this.FILE_DOESNOT_EXIST_ALERT + '\n');
        }
        else if (!this.isShared(mainAccount, updatedAccount, userFile)) {
            alert(this.FILE_NOTSHARED_ALERT + '\n');
        }
        else {
            let userObj = this.getFile(mainAccount, userFile);
            userObj['lastUpdate'] = updatedAccount;
            alert(this.FILE_UPDATED_ALERT + '\n');
        }
    }

    lastupdateUser(split) {
        let accountMain = split[1];
        let fileUser = split[2];

        if (!this.hasUser(accountMain)) {
            alert(this.ACCOUNT_DOESNOT_EXIST_ALERT + '\n');
        }
        else if (!this.hasFile(fileUser, accountMain)) {
            alert(this.FILE_DOESNOT_EXIST_ALERT + '\n');
        }
        else {
            let objUser = this.getFile(accountMain, fileUser);

            alert(`Last update: ${objUser['lastUpdate']}\n`);
        }
    }

    // Function to ask user input
    askUser() {
        let userInput = prompt(this.USER_INPUT);
        let split = userInput.split(' ');
        let mainInput = split[0].toUpperCase();


        switch (mainInput) {
            case 'ADD':

                this.addUser(split);

                break;


            case 'UPLOAD':

                this.uploadUser(split);

                break;

            case 'SHARE':

                this.shareUser(split);

                break;

            case 'MINSPACE':

                this.minspaceUser();

                break;

            case 'LISTFILES':

                this.listFilesUser(split);

                break;

            case 'LISTALL':

                this.listallUsers();

                break;

            case 'EXIT':

                this.exitUser();

                return;

            case 'UPDATE':

                this.updateUser(split);

                break;

            case 'LASTUPDATE':

                this.lastupdateUser(split);

                break;

        }

        return this.askUser();
    }
}

let app = new Cloud();
app.askUser();