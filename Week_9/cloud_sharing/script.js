function alert(mens) {
    console.log (mens);
}

function prompt(msg, input) {
    console.log(msg);
    return input;
}

class File {
    constructor(name, size, account) {
        this.name = name;
        this.size = size;
        this.account = account;
    }
}

class Account {
    constructor(email, type, size) {
        this.email = email;
        this.type = type;
        this.size = size;
    }
}

class Cloud {
    constructor() {
        this.USER_INPUT = 'Insert your input';
    }

    askUser() {
        let userInput = prompt(this.USER_INPUT, 'olá');

        switch (this.USER_INPUT) {
            case 'ADD' :

            break;

            case 'UPLOAD' :

            break;

            case 'SHARE' :

            break;

            case 'MINSPACE' :

            break;

            case 'LISTFILES' :
             
            break;

            case 'LISTALL' :

            break;

            case 'EXIT' :

            break;

            case 'UPDATE' :

            break;

            case 'LASTUPDATE' :

            break;

        }

        this.askUser();
    }
}

let app = new Cloud();
app.askUser();