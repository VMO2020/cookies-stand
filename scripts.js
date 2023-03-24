//  Declare Variables using camelCase
let myName = 'Victor Ottati';
let myAge = 61;
console.log(`My name is : ${myName} and i have ${myAge} years old`);

// Arrays
let colors = ['red', ' green', 'blue'];
console.log(`RGB colors: ${colors}`);

// Objects
let user = {
	name: 'Victor M. Ottati',
	age: 61,
	liverpool_fan: true,
};
console.log(user);

// Operators "+", "-", "*", "/"
console.log(`5 + 5 = ${5 + 5}`);
console.log(`5 - 5 = ${5 - 5}`);
console.log(`5 / 5 = ${5 / 5}`);
console.log(`5 * 5 = ${5 * 5}`);

// Concatenation strings, variables and numbers
x = '5' + 5;
console.log(`'5' + 5: ${x}`);
console.log('typeof: ' + typeof x);

// Manipulate the DOM
const heading = document.getElementById('title');
console.log(heading);

heading.onclick = () => {
	alert('Heading clicked...');
};
