class Customer {
  constructor(name, balance, debts) {
    this.name = name;
    this.balance = balance;
    this.debts = debts;
  }

  buy() {

  }

  createDebt(amount, interestLoan) {
    balance += amount;
    debt = amount + (amount * interestLoan)
  }

  robBank() {
    balence += 10000;
  }
}

class VIPcustomer extends Customer {
  constructor(name, balance, debts) {
    super(name, balance, debts);
  }
}

class Product {
  constructor(name, price, category, units) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.units = units;
  }
}

class ProductVIP extends Product {
    constructor(name, price, category, units) {
        super(name, price, category, units);
      }
}

let customer = [];

for (let i = 0; i < 4; i ++) {
    let name = prompt('What is your name?');
    let balance = prompt('What is your balance?');
    let debts = prompt('Whats is your debts?');

    if (i < 2) {
        customer.push(new VIPcustomer (name,balance,debts))
    } 
    else {
        customer.push(new Customer(name,balance,debts));
    }
    
}

let productNum = prompt('How many products do you have?');

let productArr = [];

for (let i = 0; i < productNum; i++) {
    let productName = prompt('Product name');
    let price = prompt('Product price');
    let category = prompt('Product category');
    let units = prompt('Product units');
    let type = prompt('Product type');

    
    if (type === 'Normal') {
        productArr.push( new Product (productName,price,category,units))
    }
    else if (type === 'VIP') {
        productArr.push( new ProductVIP (productName,price,category,units) )
    } 
    else {
        alert('you must insert "Normal" or "VIP"')
    }
}

if (customer.length > 0 && productsArr.length > 0) {
    alert('The store is open!');

    let list = [];
    for (let i = 0; i < productArr.length; i ++) {
        list.push(productArr[i][0]);
    }

    //5
    for (let i = 0; i < 4; i ++) {

        let user = prompt('Welcome to the store, whats your name?'); // aske user namer
        let userList = alert(list.join(',')) //display list items
        let buyList = alert('Which items do you want to buy?') // 
    }
} 
else {
    alert('You must insert your input')
}



