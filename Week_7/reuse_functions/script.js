function greet(age, gender, name) {

  if (age >= 40) {
    gender === 'male' ? console.log(`Hello Mr. ${name}`) : console.log(`Hello Ms. ${name}`);
  }
  else {
    gender === 'male' ? console.log(`Hey ${name} my boy`) : console.log(`Hey ${name} my girl`);
  }

}

let greetAnAdultMale = greet.bind(null, 45, 'male');

let greetAYoungster = greet.bind(null, 20)

greetAnAdultMale('Tiago');

greetAYoungster('female', 'Vera');