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

// Conditionals Hello user
let userNew = prompt('Hello my name is Victor, what is your name?');
let time = prompt('Hi what time is it (24h)!');
let message;

if (!userNew) {
	userNew = '';
}

if (time < 12) {
	message = 'Good morning ' + userNew;
} else if (time > 12 && time < 24) {
	message = 'Good afternoon ' + userNew;
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
