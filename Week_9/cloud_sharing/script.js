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

    }
}