let userNew2;

function yourName() {
	userNew2 = prompt('What is your name');
	return document.write(userNew2);
}

function timeOfDay() {
	let time = prompt('Hi ' + userNew2 + ', what hour is it? (0 - 23)');
	let message;

	if (!userNew2) {
		userNew2 = '';
	}

	if (time < 12) {
		message = 'Good morning ' + userNew2;
	} else if (time <= 18) {
		message = 'Good afternoon ' + userNew2;
	} else if (time < 24) {
		message = 'Good night ' + userNew2;
	} else {
		message = 'That hour does not exist ' + userNew2;
	}

	return message;
}
