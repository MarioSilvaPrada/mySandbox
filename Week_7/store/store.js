class Customer {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    // this.debts = debts;
  }

  buy() { }

  createDebt(amount, interestLoan) {
    balance += amount;
    debt = amount + amount * interestLoan;
  }

  robBank() {
    balence += 10000;
  }
}

class VIPcustomer extends Customer {
  constructor(name, balance) {
    super(name, balance);
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

for (let i = 0; i < 4; i++) {
  let name = prompt("What is your name?");
  let balance = parseInt(prompt("What is your balance?"));
  // let debts = parseInt(prompt('Whats is your debts?'));

  if (i < 2) {
    customer.push(new VIPcustomer(name, balance));
  } else {
    customer.push(new Customer(name, balance));
  }
}

let productNum = prompt("How many products do you have?");

let productArr = [];

for (let i = 0; i < productNum; i++) {
  let productName = prompt("Product name");
  let price = parseFloat(prompt("Product price"));
  let category = prompt("Product category");
  let units = parseInt(prompt("Product units"));
  let type = prompt('Product type - Insert "Vip" or "Normal"');

  if (type === "Normal") {
    productArr.push(new Product(productName, price, category, units));
  } else if (type === "Vip") {
    productArr.push(new ProductVIP(productName, price, category, units));
  } else {
    alert('you must insert "Normal" or "Vip"');
  }
}

console.log(productArr);
console.log(customer);

if (customer.length > 0 && productArr.length > 0) {
  alert("The store is open !");

  // 5
  let user = prompt("Welcome to the store, whats your name?"); // ask user namer
  while (user !== "store_closed*") {
    let hasCustomer = false;
    let customerSelected = null;

    for (let i = 0; i < customer.length; i++) {
      if (customer[i]["name"] === user) {
        hasCustomer = true;
        customerSelected = customer[i];
      }
    }
    console.log(customerSelected);

    alert("list of products:");

    for (let i = 0; i < productArr.length; i++) {
      alert(
        `${productArr[i]["name"]} ${productArr[i]["price"]} ${
        productArr[i]["category"]
        } ${productArr[i]["units"]}`
      ); //display list items
    }

    let userItem = prompt("Which items do you want to buy?"); // ask for item

    //check if store has item choosen by user
    let hasItem = false;
    let productSelected = null;
    for (let i = 0; i < productArr.length; i++) {
      if (productArr[i]["name"] === userItem) {
        hasItem = true;
        productSelected = productArr[i];
      }
    }

    if (hasItem) {

      if (productSelected instanceof ProductVIP && !(customerSelected instanceof VIPcustomer)) {
        alert("You are not on the VIP list, sorry");

      } else if (productSelected['units'] < 0) {

        alert(`We ran out of ${productSelected['name']}, sorry`);

      } else {

        if (customerSelected['balance'] < productSelected['price']) {
          alert('Your credit card does not work, you don\'t have money');
        } 
        else {
          alert('Thank you for your purchase, bye');
        }

      }

    } else {

      alert("We don't have that");

    }

    user = prompt("Welcome to the store, whats your name?");
  }
}
