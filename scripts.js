//  Declare Variables using camelCase
let myName = 'Victor Ottati';
let myAge = 61;
console.log(`My name is : ${myName} and i have ${myAge} years old`);

//  Declare Constant
const myActualName = 'Victor';
const myActualAge = 'secret';
console.log(
	'Hello my name is ' +
		myActualName +
		' and I am ' +
		myActualAge +
		' ' +
		'years old'
);

// Arrays
let colors = ['red', ' green', 'blue'];
console.log(`RGB colors: ${colors}`);

// Objects {property: "value"}
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

// Conditionals Hello user
let userNew = prompt('Hello my name is Victor, what is your name?');
let time = prompt('Hi what time is it (24h)!');
let message;

// Check prompt input and set default user
if (!userNew) {
	userNew = 'user';
}

if (time < 12) {
	message = 'Good morning ' + userNew;
} else if (time <= 18) {
	message = 'Good afternoon ' + userNew;
} else if (time < 24) {
	message = 'Good night ' + userNew;
} else {
	message = 'That hour does not exist ' + userNew;
}

const hello = document.getElementById('hello');
hello.innerHTML = message;

// Manipulate the DOM
const heading = document.getElementById('title');
console.log(heading);

heading.onclick = () => {
	alert('Welcome to my Cookie STAND...');
};

// Functions
function sum() {
	let x = 2 + 2;
	console.log('Sum = ' + x);
}

sum();

// Function with name
const anotherSum = function () {
	let x = 3 + 3;
	console.log('AnotherSum = ' + x);
};

anotherSum();

// Function with params NaN = Not a Number
function bestSum(param1, param2) {
	let x = param1 + param2;
	console.log('bestSum = ' + x);
}

bestSum(5, 5);

// Function with params and return
function newSum(param1, param2) {
	let x = param1 + param2;
	return x;
}

let resp = newSum(5, 5);
console.log('newSum = ' + resp);

// LOOPS
// for(initialization; condition, increment) { run statements }

let myFavPet = ['Cat', 'Dog', 'Goldfish'];

for (let i = 0; i < myFavPet.length; i++) {
	console.log('I love my pet ' + myFavPet[i]);
}

// while(condition) { run statements}
let n = 0;
let z = 0;

while (n < 3) {
	n++;
	z += n; // z = x + n
	console.log('n: ' + n);
	console.log('z: ' + z);
}

// while loop function
function guessANumber() {
	let answer;

	while (answer != 7) {
		answer = prompt('Guess a number between 1 and 10');

		if (answer != 7) {
			alert('Try Again');
		} else {
			alert('Congratulations, you are correct!');
		}
	}
}

// guessANumber();

// Function setColor with the prompt method
// prompt( "message", defaultValue)
function setColor() {
	// console.log('setColor');
	const setColorButton = document.querySelector('#button_set_color');
	const header = document.querySelector('header');
	const footer = document.querySelector('footer');
	setColorButton.onclick = () => {
		let color = prompt('Please select your favorite color');
		setColorButton.style.color = color;
		setColorButton.style.border = `2px solid ${color}`;
		header.style.backgroundColor = color;
		footer.style.backgroundColor = color;
	};
}

setColor(); // Call setColor function (run)

// Function sayHello with the confirm method
// confirm return true or false
function sayHello() {
	const setSayButton = document.querySelector('#button_say_hello');
	setSayButton.onclick = () => {
		let say = confirm('Hello!!!!!');
		// console.log(typeof say);
		if (say == true) {
			setSayButton.innerHTML = 'Great!';
			setSayButton.style.color = 'green';
		} else {
			setSayButton.innerHTML = 'Sorry!';
			setSayButton.style.color = 'red';
		}
	};
}

sayHello(); // Call sayHello function (run)

// Function using addEventListener
const contact = document.querySelector('#contact');
const contactH3 = document.querySelector('#contact h3');

let isRed = false;

contact.addEventListener('click', toggleStyles);

function toggleStyles() {
	if (isRed) {
		contact.style.border = '2px solid black';
		contactH3.style.color = 'black';
		isRed = false;
	} else {
		contact.style.border = '2px solid red';
		contactH3.style.color = 'red';
		isRed = true;
	}
}
