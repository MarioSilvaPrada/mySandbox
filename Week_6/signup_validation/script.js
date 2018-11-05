
let userInput = prompt('Please insert a valid email').trim();

var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

if (re.test(userInput)) {
    alert(`The email is valid, proceed with the email:${userInput}`);
} else {
    alert('Please insert a valid email');
}

