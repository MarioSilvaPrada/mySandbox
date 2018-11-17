function greet(age, gender, name) {

  if (age >= 40) {
    gender === 'male' ? console.log(`Hello Mr. ${name}`) : console.log(`Hello Ms. ${name}`);
  }
  else {
    gender === 'male' ? console.log(`Hey ${name} my boy`) : console.log(`Hey ${name} my girl`);
  }

}

function greetAnAdultMale(name) {
  greet.apply(null, [45, 'male', name]);
} 

greetAnAdultMale('Carlos');

function greetAYoungster(name, gender) {
  greet.apply(null, [20, gender, name]);
} 

greetAYoungster('Vera', 'female');